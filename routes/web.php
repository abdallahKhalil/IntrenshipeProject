<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostsController;
use Illuminate\Support\Facades\Mail;



/*
|--------------------------------------------------------------------------
| GET -  Request a resource
| POST - Create a new resource
| PUT - Update a resource
| PATCH - Modify a resource
| DELETE - Delete a resource
| OPTION - Ask the server which verbs are allowed for
| resource - is a row int the database
| ----------------------------------------------------------------
| Route::prefix('/buyP')->group(function () {
|   Route::get ('/')...
|   Route::post ... 
|   });
| ----------------------------------------------------------------
| Route::fallback(FallbackController::class); //fallback route replace the 404|not found page and direct the user to a place you specify throw fallbackController
|
*/
// Route::get('/buyP', function(){
//     PostsController::class ;
//     return Inertia::render('BuyP');
        
// })
// ->name('buyP');

//  Route::get('/rentP', [PostsController::class, 'getRentPosts'])->name('rentP');

// Route::get('/rentP', function(){
//     return Inertia::render('RentP');
// })->name('rentP');

// Posts index.jsx to display the the users posts
// Route::get('posts/index', [PostsController::class, 'getUserPosts'])->name('index');
// Route::get('posts', [PostsController::class, 'edit'])->name('edit');
//  Route::get('posts/index', function(){

//     return Inertia::render('posts/index');
//  })->name('index');

//  Route::get('posts/edit/{posts}', function(){

//     Route::get('posts/{posts}', [PostsController::class, 'edit']);
//     return Inertia::render('posts/edit');
//  })->name('edit');


// Route::any('/sellP', function(){
//    Route::post('SellP', [PostsController::class, 'create'])
//    ->middleware(['auth', 'verified'])->name('sellP');
//    return Inertia::render('SellP');
     
//  })
//  ->middleware(['auth', 'verified'])
// ->name('sellP');

// Route::get('ViewDetails', [PostsController::class, 'show'])->name('viewDetails');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('Main')->group(function(){
    Route::post('/',[PostsController::class,'store'])->name('Main.store');
    Route::get('/SellP', [PostsController::class, 'create'])->name('Main.sellP')->middleware(['auth', 'verified']);
    Route::get('/BuyP', [PostsController::class, 'getBuyPosts'])->name('Main.buyP');
    Route::get('/RentP',[PostsController::class, 'getRentPosts'])->name('Main.rentP');
    Route::get('/ViewDetails/{id}',[PostsController::class,'show'])->name('Main.viewDetails');
    Route::post('/{id}',[ PostsController::class, 'updateFav'])->name('Main.updateFav')->middleware(['auth', 'verified']);
    Route::delete('/{id}',[ PostsController::class, 'deleteFav'])->name('Main.deleteFav');

});

Route::prefix('Posts')->group(function(){
    Route::get('/index/{id}',[PostsController::class, 'getUserPosts'])->name('Posts.index');
    Route::get('/edit/{id}',[PostsController::class, 'edit'])->name('Posts.edit');
    Route::put('/{data}', [PostsController::class, 'update'])->name('Posts.update');
    Route::delete('/{id}',[PostsController::class, 'destroy'])->name('Posts.delete');
    Route::get('/favorite',[PostsController::class, 'getFav'])->name('Posts.favorite');
    Route::get('/ChangePass', [PostsController::class,'getPass'])->name('Posts.changePass');
    Route::put('/',[PostsController::class, 'resetPassword'])->name('Posts.resetPassword');
    Route::get ('/Alert',[PostsController::class, 'Alert'])->name('Posts.Alert');
    Route::post('/',[PostsController::class, 'getAlert'])->name('Posts.getAlert');
    Route::get('/mail', [PostsController::class, 'sendMail'])->name('Posts.mail');

});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';


