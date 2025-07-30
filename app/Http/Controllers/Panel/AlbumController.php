<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\AlbumRequest;
use App\Services\Interfaces\AlbumServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    function __construct(
        private readonly AlbumServiceInterface $albumService
    )
    {}

    public function create(int $bandId): Response
    {
        return Inertia::render('albums/create', [
            'bandId' => $bandId
        ]);
    }

    public function store(AlbumRequest $request): RedirectResponse
    {
        try {
            $this->albumService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->back()->with('success', 'Album created successfully');

    }
}
