<?php

use App\Http\Controllers\panel\PublisherController;
use App\Services\RoleManager\RoleManager;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::prefix('/panel')->middleware(['auth', 'verified'])->group(function () {
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
});

Route::get('/role', function() {
    $roleManager = new RoleManager();
    $roleManager->buildAdminPermission();
});
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
