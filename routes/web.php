<?php

use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Panel\BandController;
use App\Http\Controllers\Panel\PersonController;
use App\Http\Controllers\Panel\PublisherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'Home'])
    ->name('home');

Route::prefix('/panel')->middleware(['auth', 'verified', 'formOptionsMiddleware'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('publishers', [PublisherController::class, 'index'])
        ->name('publishers.index')
        ->middleware('permission:publishers.view');

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
        ->middleware('permission:people.view');

    Route::get('people/create', [PersonController::class, 'create'])
        ->name('people.create')
        ->middleware('permission:people.view');

    Route::post('people/store', [PersonController::class, 'store'])
        ->name('people.store')
        ->middleware('permission:people.view');

    Route::get('people/edit/{person}', [PersonController::class, 'edit'])
        ->name('people.edit')
        ->middleware('permission:people.view');

    Route::get('bands', [BandController::class, 'index'])
        ->name('bands.index')
        ->middleware('permission:bands.view');

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
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
