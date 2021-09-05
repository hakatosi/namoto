<?php

// =======> '/' <=======
Route::get('/', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(1);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Home',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 1);

// =======> '/login' <=======
Route::get('/login', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(2);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Авторизация',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 2);

// =======> '/registration' <=======
Route::get('/registration', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(3);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Регистрация',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 3);

// =======> '/recovery' <=======
Route::get('/recovery', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(4);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Восстановление пароля',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 4);

// =======> '/zayavka-na-arendu' <=======
Route::get('/zayavka-na-arendu', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(5);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Заявка на аренду',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 5);

// =======> '/rooms/create' <=======
Route::get('/rooms/create', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(6);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Создание помещения',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 6);

// =======> '/rooms' <=======
Route::get('/rooms', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(7);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Список помещений',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 7);

// =======> '/link' <=======
Route::get('/link', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(8);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Презентация решения',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 8);

// =======> '/404' <=======
Route::get('/404', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(9);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => '404',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 9);

// =======> '/arenda' <=======
Route::get('/arenda', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(10);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Аренда',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 10);

// =======> '/documents' <=======
Route::get('/documents', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(11);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Документы',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 11);

// =======> '/bidding' <=======
Route::get('/bidding', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(12);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Торги',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 12);

// =======> '/wallet' <=======
Route::get('/wallet', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(13);
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  if( $preload_content['content'] ){
    $pages = [];
  } else {
    $pages = \App\Page::get_pages_for_frontend( true );
  }
  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Токены',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 13);