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

$v1Prefix = 'v1/';
$MPrefix = $v1Prefix.'mobile/';

Route::group(['middleware' => 'api', 'prefix' => $v1Prefix.'auth'], function () {

    //Login User
    Route::post('login', 'Auth\AuthController@login');
    Route::post('logout', 'Auth\AuthController@logout');
    Route::post('refresh', 'Auth\AuthController@refresh');
    Route::post('me', 'Auth\AuthController@me');

});

Route::group(['prefix' => $MPrefix], function () {

    /**
     * Albums
     */
    Route::get('albums/padding/{nb}', 'Api\AlbumController@padding');

    /**
     * Categories
     */
    Route::get('categories/padding/{nb}', 'Api\CategorieController@padding');

    /**
     * Tags
     */
    Route::get('tags/padding/{nb}', 'Api\TagController@padding');


    /**
     * Images
     */
    Route::get('images/padding/{nb}', 'Api\ImageController@padding');
    Route::get('images/random/padding/{nb}', 'Api\ImageController@randomPadding');
    Route::post('images/infos/view', 'Api\ImageController@store_view');
    Route::post('images/infos/like', 'Api\ImageController@store_like');

    /**
     * Videos
     */
    Route::get('videos/padding/{nb}', 'Api\VideoController@padding');
    Route::get('videos/random/padding/{nb}', 'Api\VideoController@randomPadding');
    Route::post('videos/infos/view', 'Api\VideoController@store_view');
    Route::post('videos/infos/like', 'Api\VideoController@store_like');

});


Route::group(['middleware' => 'jwt', 'prefix' => $v1Prefix], function () {
    /**
     * Users
     */
    Route::get('users/active/{id}', 'Api\UserController@active');

    /**
     * Albums
     */
    Route::get('albums/padding/{nb}', 'Api\AlbumController@padding');

    /**
     * Categories
     */
    Route::get('categories/padding/{nb}', 'Api\CategorieController@padding');

    /**
     * Tags
     */
    Route::get('tags/padding/{nb}', 'Api\TagController@padding');


    /**
     * Images
     */
    Route::get('images/padding/{nb}', 'Api\ImageController@padding');

    /**
     * Videos
     */
    Route::get('videos/padding/{nb}', 'Api\VideoController@padding');


    // CRUD Base

    Route::apiResource('users', 'Api\UserController');
    Route::apiResource('categories', 'Api\CategorieController');
    Route::apiResource('tags', 'Api\TagController');
    Route::apiResource('albums', 'Api\AlbumController');
    Route::apiResource('images', 'Api\ImageController');
    Route::apiResource('videos', 'Api\VideoController');
});


Route::fallback(function(){
    return response()->json(['error' => 'Route Not Found'], 404);
});
