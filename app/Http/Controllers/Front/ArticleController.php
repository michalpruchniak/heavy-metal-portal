<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Inertia\Response;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function show(Article $article): Response
    {
        return Inertia::render('frontend/articles/show', ['article' => $article]);
    }
}
