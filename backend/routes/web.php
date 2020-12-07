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

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key', function() {
    return \Illuminate\Support\Str::random(32);
});

$router->get('products/show/', function() {
    return response()->json();
});

$router->get('actions', 'ActionController@index');
$router->get('currents', 'CurrentController@index');
$router->get('elements', 'ElementController@index');
$router->get('modes', 'ModeController@index');

$router->get('processes', 'ProcessController@index');
$router->get('processes/show/{id}', 'ProcessController@show');
$router->post('processes/save', 'ProcessController@save');
$router->put('processes/save/{id}', 'ProcessController@update');
$router->post('processes/delete/{id}', 'ProcessController@delete');

$router->get('products', 'ProductController@index');

$router->get('products/show/{id}', 'ProductController@show');
$router->post('products/save', 'ProductController@save');
$router->put('products/update/{id}', 'ProductController@update');
$router->get('products/newFmea', 'ProductController@newFmea');
$router->post('products/delete/{id}', 'ProductController@delete');

$router->get('subprocesses', 'SubprocessController@index');