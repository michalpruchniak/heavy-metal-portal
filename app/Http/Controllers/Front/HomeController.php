<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\EventServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private AlbumServiceInterface $albumService,
        private EventServiceInterface $eventService
    ) {}

    public function Home(): Response
    {
        return Inertia::render('frontend/index', [
            'albums' => $this->albumService->getAll(),
            'events' => $this->eventService->getEventsFromLast7Days(),
        ]);
    }
}
