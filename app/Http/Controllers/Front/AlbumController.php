<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;
use Inertia\Inertia;

class AlbumController extends Controller
{
    public function __construct(
        private AlbumServiceInterface $albumService,
    ){}

    public function show(string $album) {
        $singleAlbum = $this->albumService->firstOrFail(where: ['slug' => $album], relationships: ['band', 'publisher']);
        $otherAlbumsThisBand = $this->albumService->otherAlbumsThisBand(band: $singleAlbum->band_id);

        return Inertia::render('frontend/albums/index', ['album' => $singleAlbum, 'albums' => $otherAlbumsThisBand]);

    }
}
