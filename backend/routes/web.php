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

$router->get('actions', 'ActionController@index');
$router->get('currents', 'CurrentController@index');
$router->get('elements', 'ElementController@index');
$router->get('modes', 'ModeController@index');
$router->get('processes', 'ProcessController@index');
$router->get('products', 'ProductController@index');
$router->get('products/show/{id}', 'ProductController@show');
$router->get('subprocesses', 'SubprocessController@index');