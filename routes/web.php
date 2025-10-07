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

    Route::get('publishers', [PublisherController::class, 'index'])
        ->name('publishers.index')
        ->middleware('permission:publishers.index');

    Route::get('publishers/create', [PublisherController::class, 'create'])
        ->name('publishers.create')
        ->middleware('permission:publishers.create');

    Route::post('publishers', [PublisherController::class, 'store'])
        ->name('publishers.store')
        ->middleware('permission:publishers.create');

    Route::get('publishers/{publisher}/edit', [PublisherController::class, 'edit'])
        ->name('publishers.edit')
        ->middleware('permission:publishers.edit');

    Route::put('publishers/{publisher}', [PublisherController::class, 'update'])
        ->name('publishers.update')
        ->middleware('permission:publishers.edit');

    Route::get('people', [PersonController::class, 'index'])
        ->name('people.index')
        ->middleware('permission:people.index');

    Route::get('people/create', [PersonController::class, 'create'])
        ->name('people.create')
        ->middleware('permission:people.index');

    Route::post('people/store', [PersonController::class, 'store'])
        ->name('people.store')
        ->middleware('permission:people.index');

    Route::get('people/edit/{person}', [PersonController::class, 'edit'])
        ->name('people.edit')
        ->middleware('permission:people.index');

    Route::put('people/{person}', [PersonController::class, 'update'])
        ->name('people.update')
        ->middleware('permission:bands.edit');

    Route::get('bands', [BandController::class, 'index'])
        ->name('bands.index')
        ->middleware('permission:bands.index');

    Route::get('band/create', [BandController::class, 'create'])
        ->name('bands.create')
        ->middleware('permission:bands.create');

    Route::post('band/store', [BandController::class, 'store'])
        ->name('bands.store')
        ->middleware('permission:bands.create');

    Route::get('bands/edit/{band}', [BandController::class, 'edit'])
        ->name('bands.edit')
        ->middleware('permission:bands.edit');

    Route::put('bands/{band}', [BandController::class, 'update'])
        ->name('bands.update')
        ->middleware('permission:bands.edit');

    Route::get('albums/{band}', [AlbumController::class, 'index'])
        ->name('albums.index')
        ->middleware('permission:albums.index');

    Route::get('albums/create/{band}', [AlbumController::class, 'create'])
        ->name('albums.create')
        ->middleware('permission:albums.create');

    Route::post('albums/store', [AlbumController::class, 'store'])
        ->name('albums.store')
        ->middleware('permission:albums.create');

    Route::get('albums/edit/{band}/{album}', [AlbumController::class, 'edit'])
        ->name('albums.edit')
        ->middleware('permission:albums.edit');

    Route::put('albums/{album}', [AlbumController::class, 'update'])
        ->name('albums.update')
        ->middleware('permission:albums.edit');

    Route::get('events/create', [EventController::class, 'create'])
        ->name('events.create')
        ->middleware('permission:albums.edit');

    Route::post('events', [EventController::class, 'store'])
        ->name('events.store')
        ->middleware('permission:events.create');

    Route::get('events', [EventController::class, 'index'])
        ->name('events.index')
        ->middleware('permission:events.index');

    Route::get('events/edit/{event}', [EventController::class, 'edit'])
        ->name('events.edit')
        ->middleware('permission:events.edit');

    Route::put('events/{event}', [EventController::class, 'update'])
        ->name('events.update')
        ->middleware('permission:events.edit');

    Route::get('articles/create', [ArticleController::class, 'create'])
        ->name('articles.create')
        ->middleware('permission:events.edit');

    Route::get('articles', [ArticleController::class, 'index'])
        ->name('articles.index')
        ->middleware('permission:articles.index');
    Route::post('articles', [ArticleController::class, 'store'])
        ->name('articles.store');

    Route::get('articles/edit/{article}', [ArticleController::class, 'edit'])
        ->name('articles.edit')
        ->middleware('permission:events.edit');

    Route::put('articles/{article}', [ArticleController::class, 'update'])
        ->name('articles.update');

});
require __DIR__.'/front.php';

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
