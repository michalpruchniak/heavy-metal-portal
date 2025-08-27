<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\AlbumServiceInterface;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(private AlbumServiceInterface $albumService) {}

    public function Home()
    {
        return Inertia::render('frontend/index', ['albums' => $this->albumService->getAll()]);
    }
}
