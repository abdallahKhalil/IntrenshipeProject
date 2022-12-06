<?php

use App\Http\Controllers\CreateImageTableController;
use Illuminate\Support\Facades\Route;

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


Route::get('/image', [CreateImageTableController::class,'index'])->name('image.index');
Route::post('/image', [CreateImageTableController::class,'store'])->name('image.store');