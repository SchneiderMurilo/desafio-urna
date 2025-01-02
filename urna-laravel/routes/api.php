<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UrnaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('login', [AuthController::class, 'login'])->name('login');

Route::post('urna', [UrnaController::class, 'store']);

Route::middleware('auth:api')->get('test', function (Request $request) {
    return response()->json($request->user());
});


