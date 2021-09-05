<?php


namespace App\Providers\AltrpProviders;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\AltrpModels\user_altrp::observe(\App\Observers\AltrpObservers\user_altrpObserver::class);

        \App\AltrpModels\tenant::observe(\App\Observers\AltrpObservers\tenantObserver::class);

        \App\AltrpModels\room::observe(\App\Observers\AltrpObservers\roomObserver::class);

        \App\AltrpModels\document::observe(\App\Observers\AltrpObservers\documentObserver::class);

        \App\AltrpModels\room_type::observe(\App\Observers\AltrpObservers\room_typeObserver::class);


    }
}