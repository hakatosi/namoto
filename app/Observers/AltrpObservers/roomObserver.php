<?php

namespace App\Observers\AltrpObservers;

use App\Altrp\Model;
// use App\Events\AltrpEvents\roomEvent;
use App\Helpers\Classes\CurrentEnvironment;
use App\Jobs\RunRobotsJob;
use App\Observers\BaseObserver;
use App\Services\Robots\RobotsService;
use App\AltrpModels\room;
use Modules\Blockchain\Entities\Blockchain;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Modules\Blockchain\Http\Controllers\BlockchainController;

class roomObserver extends BaseObserver
{
    use DispatchesJobs;

    /**
     * @var RobotsService
     */
    protected $robotsService;

    /**
     * @var CurrentEnvironment|mixed
     */
    protected $currentEnvironment;

    /**
     * test_postObserver constructor.
     * @param RobotsService $robotsService
     */
    public function __construct(RobotsService $robotsService)
    {
        $this->robotsService = $robotsService;
        $this->currentEnvironment = CurrentEnvironment::getInstance();
    }

    /**
     * Handle the room "created" event.
     *
     * @param  \App\AltrpModels\room $room
     * @return void
     */
    public function created(room $room)
    {
        $model = Model::where('name', 'room')->first();
        $source = $model->altrp_sources->where('type', 'add')->first();
        $columns = explode(',', $model->table->columns->implode('name', ','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $room,
            'action_type' => 'create'
        ];

        if (!$room->signature) {
            $blockChainController = new BlockchainController();
            $blockChainClass = new Blockchain();
            $res = $blockChainClass->registerRoom($room->id);
            $data = $res['success'];
            if ($data) {
                $userSign = $blockChainClass->ownerSignature();
                $sign = $blockChainController->send('signmessage', [$userSign, $data])->result;
                if ($sign) {
                    $room->signature = $sign;
                    $room->save();
                    $newres = $blockChainClass->registerRoom($room->id, true)['success'];
                    $nameNew = 'dpo:sher:' . \Str::slug($room->name) . ':0';
                    $blockChainController->send('name_new', [$nameNew, $newres,  30, $userSign]);
                    // dd($newData);
                }
            }
        }

        try {
            $robots = $this->robotsService->getCurrentModelRobots($model);

            $this->dispatch(new RunRobotsJob(
                $robots,
                $this->robotsService,
                $data,
                'created',
                $this->currentEnvironment
            ));
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    /**
     * Handle the room "updated" event.
     *
     * @param  \App\AltrpModels\room $room
     * @return void
     */
    public function updated(room $room)
    {
        $model = Model::where('name', 'room')->first();
        $source = $model->altrp_sources->where('type', 'update')->first();
        $columns = explode(',', $model->table->columns->implode('name', ','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $room,
            'action_type' => 'update'
        ];

        $robots = $this->robotsService->getCurrentModelRobots($model);

        $this->dispatch(new RunRobotsJob(
            $robots,
            $this->robotsService,
            $data,
            'updated',
            $this->currentEnvironment
        ));
    }

    /**
     * Handle the room "deleted" event.
     *
     * @param  \App\AltrpModels\room $room
     * @return void
     */
    public function deleted(room $room)
    {
        $model = Model::where('name', 'room')->first();
        $source = $model->altrp_sources->where('type', 'delete')->first();
        $columns = explode(',', $model->table->columns->implode('name', ','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $room,
            'action_type' => 'delete'
        ];

        $robots = $this->robotsService->getCurrentModelRobots($model);

        $this->dispatch(new RunRobotsJob(
            $robots,
            $this->robotsService,
            $data,
            'deleted',
            $this->currentEnvironment
        ));
    }

    /**
     * Handle the room "restored" event.
     *
     * @param  \App\AltrpModels\room $room
     * @return void
     */
    public function restored(room $room)
    {
        //
    }

    /**
     * Handle the room "force deleted" event.
     *
     * @param  \App\AltrpModels\room $room
     * @return void
     */
    public function forceDeleted(room $room)
    {
        //
    }
}
