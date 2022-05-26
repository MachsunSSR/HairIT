<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;


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

//CRUD History
// Route::get('/myorders', [CustomerController::class, 'order_index_endpoint']);

//CRUD Booking ( done )
Route::post('/checkout/{user_id}/{layanan_id}', [OrderController::class, 'index_endpoint']);

//CRUD Nambang dan mengurangi guest ( done )
Route::post('/subtract-quntity/{user_id}/{product_id}', [CartController::class, 'subtractCartItemQuantity_endpoint']);
Route::post('/add-quntity/{user_id}/{product_id}', [CartController::class, 'addCartItemQuantity_endpoint']);

//CRUD Booking Tanggal ( done )
Route::post('/order', [OrderController::class, 'store_endpoint']);

//CRUD Booking jenis booking ( done )
Route::post('/order', [OrderController::class, 'store_Booking_endpoint']);

//CRUD Booking jenis pembayarana ( done )
Route::post('/order', [OrderController::class, 'store_Pembayaran_endpoint']);

//CRUD Detail Order ( done )
// Route::get('order/{order_id}', [OrderController::class, 'show']);

//CRUD Login register




