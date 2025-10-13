<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Services\Interfaces\ArticleServiceInerface;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function __construct(
        private ArticleServiceInerface $articleService,
    ) {}

    public function index(): Response
    {
        $articles = $this->articleService->getall(paginate: 50);

        return Inertia::render('frontend/articles/index', ['articles' => $articles]);

    }

    public function show(Article $article): Response
    {
        return Inertia::render('frontend/articles/show', ['article' => $article]);
    }
}
