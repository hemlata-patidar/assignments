<?php

use Illuminate\Http\Request;
use App\Post;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 Route::resource('/posts','PostController');
// Route::get('/posts','PostController@index');
// Route::put('/posts','PostController@update');
// Route::delete('/posts','PostController@destroy');

Route::get('/users/{name?}', function($name = null) {
    return 'hii ' . $name . '!!';
});

Route::get('/products/{id?}', function($id = null) {
    return 'Product id is ' . $id;
});

Route::match(['get', 'post'], '/students', function(Request $req) {
    return 'Requested methos is ' . $req->method();
});

// Route::any('/posts', function(Request $req) {
//     return 'Requested methos is ' . $req->method();;
// });