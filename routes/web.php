<?php

use App\Http\Controllers\panel\PublisherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::prefix('/panel')->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::resource('publishers', PublisherController::class)->only(['index', 'create', 'store', 'edit', 'update'])->middleware('role:admin|moderator');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
