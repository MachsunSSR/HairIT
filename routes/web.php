<?php

use App\Http\Controllers\LayananController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\Auth\RegisterAdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::group(['middleware' => ['auth']], function () {

    //CRUD Category ( done )
    Route::get('/category', [CategoryController::class, 'index']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::delete('/category/{id}', [CategoryController::class, 'destroy']);
    Route::get('/category/{id}/edit', [CategoryController::class, 'edit']);
    Route::patch('/category/{id}', [CategoryController::class, 'update']);

    //CRUD Product ( done )
    Route::get('layanan', [LayananController::class, 'index']);
    Route::get('layanan/create', [LayananController::class, 'create']);
    Route::post('layanan', [LayananController::class, 'store']);
    Route::get('layanan/edit', [LayananController::class, 'edit']);
    Route::post('layanan/{layanan_id}', [LayananController::class, 'update']);
    Route::get('layanan/{layanan_id}/show', [LayananController::class, 'show']);
    Route::resource('layanan', LayananController::class);

    //CRUD Profile ( done )
    Route::get('/profile/{id}/show', [ProfileController::class, 'index']);
    Route::patch('/profile/{id}', [ProfileController::class, 'update']);

    //Customer
    Route::get('/layanans', [CustomerController::class, 'index']);
    Route::get('/search-layanans={layanan_name}', [LayananController::class, 'search']);
    Route::get('/layanan/category/{category_id}', [CategoryController::class, 'showProductByCategory']);
    Route::get('/myorders', [CustomerController::class, 'order_index']);

    //Cart ( done )
    Route::post('/add-to-cart/{user_id}/{layanan_id}', [CartController::class, 'addToCart']);
    Route::post('/subtract-quntity/{user_id}/{product_id}', [CartController::class, 'subtractCartItemQuantity']);
    Route::post('/add-quntity/{user_id}/{product_id}', [CartController::class, 'addCartItemQuantity']);

    //Order
    Route::get('/checkout', [OrderController::class, 'index']);
    Route::get('/order', [OrderController::class, 'store']);
    Route::post('/order', [OrderController::class, 'store']);

    

    //PDF
    Route::get('/download-invoice/{order_id}', [PDFController::class, 'generatePDF']);
});

// Admin register
    // Route::post('admin/register', [RegisterAdminController::class, 'validation']);

Auth::routes();

