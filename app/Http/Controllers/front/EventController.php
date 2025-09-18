<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\EventServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function __construct(
        private EventServiceInterface $eventService
    ) {}

    public function Show(int $event): Response
    {
        return Inertia::render('frontend/events/show', [
            'event' => $this->eventService->findOrFail($event),
        ]);
    }
}
