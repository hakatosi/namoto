<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/blockchain', function (Request $request) {
    return $request->user();

});

Route::prefix('plugins/blockchain')->group(function() {
  Route::post('/payment', 'BlockchainController@payment');
  Route::post('/emercoin', 'BlockchainController@emercoin');

});
