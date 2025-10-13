<?php

namespace App\Http\Controllers\Panel;

use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\AlbumRequest;
use App\Http\Resources\BandAlbumsResource;
use App\Models\Album;
use App\Models\Band;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;
use App\Traits\SharePermissions;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    use SharePermissions;

    public function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly AlbumServiceInterface $albumService,
    ) {

        $this->authorizePermissions(
            [
                PermissionEnum::ALBUMS_INDEX->value => ['index'],
                PermissionEnum::ALBUMS_CREATE->value => ['create', 'store'],
                PermissionEnum::ALBUMS_EDIT->value => ['edit', 'update'],
            ]
        );
    }

    public function index(Band $band): Response
    {
        return Inertia::render('albums/index', [
            'bandAlbums' => new BandAlbumsResource($band),
        ]);
    }

    public function create(Band $band): Response
    {
        return Inertia::render('albums/create', [
            'band' => $band,
        ]);
    }

    public function store(Band $band, AlbumRequest $request): RedirectResponse
    {
        try {
            $this->albumService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Album created successfully');

    }

    public function edit(Band $band, Album $album): Response
    {
        return Inertia::render('albums/create', [
            'band' => $band,
            'album' => $album,
        ]);
    }

    public function update(Band $band, Album $album, AlbumRequest $request): RedirectResponse
    {
        try {
            $this->albumService->update($album->id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Album updated successfully');
    }
}
