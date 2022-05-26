<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CategoryController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//CRUD Profile ( done )
Route::get('/profile/{id}/show', [ProfileController::class, 'index_endpoint']);
Route::patch('/profile/{id}', [ProfileController::class, 'update_endpoint']);

//CRUD Salon ( done )
Route::get('layanan/{layanan_id}/show', [LayananController::class, 'show_endpoint']);
Route::get('/layanans', [CustomerController::class, 'index_endpoint']);

//CRUD Filter Salon By category ( done )
Route::get('/layanan/category/{category_id}', [CategoryController::class, 'showProductByCategory_endpoint']);

//CRUD Login register


//CRUD Order
Route::get('/myorders', [CustomerController::class, 'order_index_endpoint']);

