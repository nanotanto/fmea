<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () {
    //return $router->app->version();
    return view('index');
});

$router->get('/key', function() {
    return \Illuminate\Support\Str::random(32);
});

$router->get('products/show/', function() {
    return response()->json();
});

$router->get('actions', 'ActionController@index');
$router->get('actions/show/{id}', 'ActionController@show');
$router->post('actions/save', 'ActionController@save');
$router->put('actions/save/{id}', 'ActionController@update');
$router->post('actions/delete/{id}', 'ActionController@delete');

$router->get('currentsAll/{id}', 'CurrentController@indexAll');
$router->get('currents', 'CurrentController@index');
$router->get('currents/show/{id}', 'CurrentController@show');
$router->post('currents/save', 'CurrentController@save');
$router->put('currents/save/{id}', 'CurrentController@update');
$router->post('currents/delete/{id}', 'CurrentController@delete');

$router->get('elements', 'ElementController@index');
$router->get('elements/show/{id}', 'ElementController@show');
$router->post('elements/save', 'ElementController@save');
$router->put('elements/save/{id}', 'ElementController@update');
$router->post('elements/delete/{id}', 'ElementController@delete');

$router->get('modesAll/{id}', 'ModeController@indexAll');
$router->get('modes/{id}', 'ModeController@index');
$router->get('modes/show/{id}', 'ModeController@show');
$router->post('modes/save', 'ModeController@save');
$router->put('modes/save/{id}', 'ModeController@update');
$router->post('modes/delete/{id}', 'ModeController@delete');

$router->get('processes', 'ProcessController@index');
$router->get('processes/show/{id}', 'ProcessController@show');
$router->post('processes/save', 'ProcessController@save');
$router->put('processes/save/{id}', 'ProcessController@update');
$router->post('processes/delete/{id}', 'ProcessController@delete');
$router->get('process_steps/{id}', 'ProcessController@process_steps');

$router->get('products', 'ProductController@index');

$router->get('products/show/{id}', 'ProductController@show');
$router->post('products/save', 'ProductController@save');
$router->put('products/update/{id}', 'ProductController@update');
$router->get('products/newFmea', 'ProductController@newFmea');
$router->post('products/delete/{id}', 'ProductController@delete');

$router->get('steps', 'StepController@index');
$router->get('process_steps', 'StepController@process_steps');
$router->get('steps/show/{id}', 'StepController@show');
$router->post('steps/save', 'StepController@save');
$router->put('steps/save/{id}', 'StepController@update');
$router->post('steps/delete/{id}', 'StepController@delete');

$router->post('/server/login', function () {
    //return $router->app->version();
    return view('login');
});

$router->get('fmea/{id}', 'FMEAController@show');