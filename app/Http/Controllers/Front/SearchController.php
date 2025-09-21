<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;

class SearchController extends Controller
{
    public function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly AlbumServiceInterface $albumService,
    ) {}

    public function search($text)
    {

        return response()->json([
            'bands' => $this->bandService->search($text),
            'albums' => $this->albumService->search($text),
            'people' => $this->albumService->search($text),

        ]);
    }
}
