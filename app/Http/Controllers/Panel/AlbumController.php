<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\AlbumRequest;
use App\Http\Resources\BandAlbumsResource;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly AlbumServiceInterface $albumService,
    )
    {}

    public function index(int $band): Response
    {
        $band = $this->bandService->findOrFail($band);

        return Inertia::render('albums/index', [
            'bandAlbums' => new BandAlbumsResource($band)
        ]);
    }

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

        return redirect()->route('bands.index')->with('success', 'Album created successfully');

    }

    public function edit(int $band, int $album): Response
    {
        $band = $this->bandService->findOrFail($band);

        $album = $this->albumService->findOrFail($album);
        return Inertia::render('albums/create', [
            'bandId' => $band->id,
            'album' => $album,
        ]);
    }

    public function update(int $album, AlbumRequest $request): RedirectResponse
    {
        try {
            $this->albumService->update($album, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Album updated successfully');
    }
}
