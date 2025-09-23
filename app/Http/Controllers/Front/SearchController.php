<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;
use Illuminate\Http\JsonResponse;

class SearchController extends Controller
{
    public function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly AlbumServiceInterface $albumService,
    ) {}

    public function search($text): JsonResponse
    {
        return response()->json([
            'bands' => $this->bandService->search($text),
            'albums' => $this->albumService->search($text),
        ]);
    }
}
