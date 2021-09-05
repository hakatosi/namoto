<?php
/*Api routes*/
// Routes for the user_altrps resource
Route::get('/user_altrps', ['uses' =>'AltrpControllers\user_altrpController@index']);
Route::get('/user_altrp_options', ['uses' =>'AltrpControllers\user_altrpController@options']);
Route::post('/user_altrps', ['uses' =>'AltrpControllers\user_altrpController@store']);
Route::get('/user_altrps/{user_altrp}', ['uses' =>'AltrpControllers\user_altrpController@show']);
Route::put('/user_altrps/{user_altrp}', ['uses' =>'AltrpControllers\user_altrpController@update']);
Route::delete('/user_altrps/{user_altrp}', ['uses' =>'AltrpControllers\user_altrpController@destroy']);
Route::put('/user_altrps/{user_altrp}/{column}', ['uses' =>'AltrpControllers\user_altrpController@updateColumn']);
Route::get('/filters/user_altrps/{column}', ['uses' =>'AltrpControllers\user_altrpController@getIndexedColumnsValueWithCount']);
// Routes for the tenants resource
Route::get('/tenants', ['uses' =>'AltrpControllers\tenantController@index']);
Route::get('/tenant_options', ['uses' =>'AltrpControllers\tenantController@options']);
Route::post('/tenants', ['uses' =>'AltrpControllers\tenantController@store']);
Route::get('/tenants/{tenant}', ['uses' =>'AltrpControllers\tenantController@show']);
Route::put('/tenants/{tenant}', ['uses' =>'AltrpControllers\tenantController@update']);
Route::delete('/tenants/{tenant}', ['uses' =>'AltrpControllers\tenantController@destroy']);
Route::put('/tenants/{tenant}/{column}', ['uses' =>'AltrpControllers\tenantController@updateColumn']);
Route::get('/filters/tenants/{column}', ['uses' =>'AltrpControllers\tenantController@getIndexedColumnsValueWithCount']);
// Routes for the rooms resource
Route::get('/rooms', ['uses' =>'AltrpControllers\roomController@index']);
Route::get('/room_options', ['uses' =>'AltrpControllers\roomController@options']);
Route::post('/rooms', ['uses' =>'AltrpControllers\roomController@store']);
Route::get('/rooms/{room}', ['uses' =>'AltrpControllers\roomController@show']);
Route::put('/rooms/{room}', ['uses' =>'AltrpControllers\roomController@update']);
Route::delete('/rooms/{room}', ['uses' =>'AltrpControllers\roomController@destroy']);
Route::put('/rooms/{room}/{column}', ['uses' =>'AltrpControllers\roomController@updateColumn']);
Route::get('/filters/rooms/{column}', ['uses' =>'AltrpControllers\roomController@getIndexedColumnsValueWithCount']);
// Routes for the documents resource
Route::get('/documents', ['uses' =>'AltrpControllers\documentController@index']);
Route::get('/document_options', ['uses' =>'AltrpControllers\documentController@options']);
Route::post('/documents', ['uses' =>'AltrpControllers\documentController@store']);
Route::get('/documents/{document}', ['uses' =>'AltrpControllers\documentController@show']);
Route::put('/documents/{document}', ['uses' =>'AltrpControllers\documentController@update']);
Route::delete('/documents/{document}', ['uses' =>'AltrpControllers\documentController@destroy']);
Route::put('/documents/{document}/{column}', ['uses' =>'AltrpControllers\documentController@updateColumn']);
Route::get('/filters/documents/{column}', ['uses' =>'AltrpControllers\documentController@getIndexedColumnsValueWithCount']);
// Routes for the room_types resource
Route::get('/room_types', ['uses' =>'AltrpControllers\room_typeController@index']);
Route::get('/room_type_options', ['uses' =>'AltrpControllers\room_typeController@options']);
Route::post('/room_types', ['uses' =>'AltrpControllers\room_typeController@store']);
Route::get('/room_types/{room_type}', ['uses' =>'AltrpControllers\room_typeController@show']);
Route::put('/room_types/{room_type}', ['uses' =>'AltrpControllers\room_typeController@update']);
Route::delete('/room_types/{room_type}', ['uses' =>'AltrpControllers\room_typeController@destroy']);
Route::put('/room_types/{room_type}/{column}', ['uses' =>'AltrpControllers\room_typeController@updateColumn']);
Route::get('/filters/room_types/{column}', ['uses' =>'AltrpControllers\room_typeController@getIndexedColumnsValueWithCount']);