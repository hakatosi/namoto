<?php

namespace App\Observers\AltrpObservers;

use App\Altrp\Model;
// use App\Events\AltrpEvents\documentEvent;
use App\Helpers\Classes\CurrentEnvironment;
use App\Jobs\RunRobotsJob;
use App\Observers\BaseObserver;
use App\Services\Robots\RobotsService;
use App\AltrpModels\document;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Modules\Blockchain\Entities\Blockchain;
use Modules\Blockchain\Http\Controllers\BlockchainController;

class documentObserver extends BaseObserver
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
     * Handle the document "created" event.
     *
     * @param  \App\AltrpModels\document $document
     * @return void
     */
    public function created(document $document)
    {
        $model = Model::where('name', 'document')->first();
        $source = $model->altrp_sources->where('type', 'add')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $document,
            'action_type' => 'create'
        ];

      if (!$document->signature) {
        $blockChainController = new BlockchainController();
        $blockChainClass = new Blockchain();
        $res = $blockChainClass->registerDocument($document->id, true);
        $data = $res['success'];
        if ($data) {
          $ownerSign = $blockChainClass->ownerSignature();
          $address = $blockChainController->send('getnewaddress')->result;
          if ($address) {
            $document->signature = $address;
            $document->save();
            $signOwner = $blockChainController->send('signmessage', [$ownerSign, $data])->result;
            if ($signOwner) {
              $userSign = $blockChainClass->userSignature();
              $signUser = $blockChainController->send('signmessage', [$userSign, $data])->result;

              //$newres = $blockChainClass->registerRoom($room->id, true)['success'];
              $nameNew = $blockChainClass->registerDocument($document->id)['success'];
              $data = str_replace('|', "\n", $data) . "\n" . 'Signature=' . $signOwner . "\n" . 'TenantSig=' . $signUser;
              $blockChainController->send('name_new', [$nameNew, $data, 30, $address]);
              // dd($newData);
            }
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
     * Handle the document "updated" event.
     *
     * @param  \App\AltrpModels\document $document
     * @return void
     */
    public function updated(document $document)
    {
        $model = Model::where('name', 'document')->first();
        $source = $model->altrp_sources->where('type', 'update')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $document,
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
     * Handle the document "deleted" event.
     *
     * @param  \App\AltrpModels\document $document
     * @return void
     */
    public function deleted(document $document)
    {
        $model = Model::where('name', 'document')->first();
        $source = $model->altrp_sources->where('type', 'delete')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $document,
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
     * Handle the document "restored" event.
     *
     * @param  \App\AltrpModels\document $document
     * @return void
     */
    public function restored(document $document)
    {
        //
    }

    /**
     * Handle the document "force deleted" event.
     *
     * @param  \App\AltrpModels\document $document
     * @return void
     */
    public function forceDeleted(document $document)
    {
        //
    }
}
