<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Services\Interfaces\ArticleServiceInerface;
use Exception;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class ArticleController extends Controller
{
    public function __construct(private readonly ArticleServiceInerface $articleService)
    {

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
            dd($e);
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Article created successfully');
    }
}
