<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Services\Interfaces\ArticleServiceInerface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function __construct(
        private readonly ArticleServiceInerface $articleService
    ) {}

    public function index(): Response
    {
        $articles = $this->articleService->getAll();

        return Inertia::render('articles/index', [
            'articles' => $articles,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('articles/create');

    }

    public function store(ArticleRequest $request): RedirectResponse
    {
        try {
            $this->articleService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('articles.index')->with('success', 'Article created successfully');
    }

    public function Edit(Article $article): Response
    {
        return Inertia::render('articles/create', [
            'article' => $article,
        ]);

    }

    public function update(int $article, ArticleRequest $request): RedirectResponse
    {
        try {
            $this->articleService->update($article, $request->getDTO());
        } catch (Exception $e) {

            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('articles.index')->with('success', 'Band updated successfully');
    }
}
