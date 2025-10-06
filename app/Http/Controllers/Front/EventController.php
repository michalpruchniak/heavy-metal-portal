<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function Show(Event $event): Response
    {
        return Inertia::render('frontend/events/show', [
            'event' => $event,
        ]);
    }
}
