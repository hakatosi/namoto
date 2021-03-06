<?php

namespace App\Observers;

use App\User;
use Modules\Blockchain\Entities\Blockchain;
use Modules\Blockchain\Http\Controllers\BlockchainController;
use App\Notifications\RegisterNotification;

class UserObserver
{
    /**
     * Handle the user "created" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {
        $blockChainController = new BlockchainController();
        $blockChainClass = new Blockchain();
        $res = $blockChainClass->registerUser($user->id);
        $data = $res['success'];
        $userSign = $blockChainClass->ownerSignature();
        if ($data) {
            $nameNew = 'dpo:sher:' . \Str::slug($user->name) . $user->id . ':0';
            $blockChainController->send('name_new', [$nameNew, $data,  30, $userSign]);
        }
    }

    /**
     * Handle the user "updated" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function updated(User $user)
    {
    }

    /**
     * Handle the user "deleted" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
    }

    /**
     * Handle the user "restored" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the user "force deleted" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
