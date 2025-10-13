<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Services\Interfaces\AlbumServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    public function __construct(
        private AlbumServiceInterface $albumService,
    ) {}

    public function index(): Response
    {
        $albums = $this->albumService->getall(paginate: 50);

        return Inertia::render('frontend/albums/index', ['albums' => $albums]);

    }

    public function show(Album $album): Response
    {
        $album->load(['band', 'publisher']);
        $otherAlbumsThisBand = $this->albumService->otherAlbumsThisBand(band: $album->band_id);

        return Inertia::render('frontend/albums/show', ['album' => $album, 'albums' => $otherAlbumsThisBand]);

    }
}
