<?php

use App\Http\Controllers\Panel\AlbumController;
use App\Http\Controllers\Panel\ArticleController;
use App\Http\Controllers\Panel\BandController;
use App\Http\Controllers\Panel\EventController;
use App\Http\Controllers\Panel\PersonController;
use App\Http\Controllers\Panel\PublisherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/panel')->middleware(['auth', 'verified', 'formOptionsMiddleware'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('publishers', PublisherController::class)->only(['index', 'create', 'edit', 'store', 'update']);
    Route::resource('people', PersonController::class)->only(['index', 'create', 'edit', 'store', 'update']);
    Route::resource('bands', BandController::class)->only(['index', 'create', 'edit', 'store', 'update']);
    Route::resource('articles', ArticleController::class)->only(['index', 'create', 'edit', 'store', 'update']);
    Route::resource('events', EventController::class)->only(['index', 'create', 'edit', 'store', 'update']);
    Route::resource('bands.albums', AlbumController::class)
        ->only(['index', 'create', 'store', 'edit', 'update']);
});
require __DIR__.'/front.php';

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
