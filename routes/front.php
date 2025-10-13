<?php

use App\Http\Controllers\Front\AlbumController;
use App\Http\Controllers\Front\ArticleController;
use App\Http\Controllers\Front\BandController;
use App\Http\Controllers\Front\EventController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Front\PersonController;
use App\Http\Controllers\Front\SearchController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'Home'])
    ->name('home');
Route::get('albums', [AlbumController::class, 'index'])->name('album.index');
Route::get('album/{album}', [AlbumController::class, 'show'])->name('album.show');
Route::get('band/{band}', [BandController::class, 'show'])->name('band.show');
Route::get('person/{person}', [PersonController::class, 'show'])->name('person.show');
Route::get('event/{event}', [EventController::class, 'show'])->name('event.show');
Route::get('article/{article}', [ArticleController::class, 'show'])->name('article.show');

Route::get('search/{text}', [SearchController::class, 'search'])->name('search');
