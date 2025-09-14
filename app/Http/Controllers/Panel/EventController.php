<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Services\Interfaces\EventServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function __construct(
        private readonly EventServiceInterface $eventService
    ) {}

    public function index(): Response
    {
        $bands = $this->eventService->getAll();

        return Inertia::render('bands/index', [
            'bands' => $bands,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('events/create');

    }

    public function store(EventRequest $request): RedirectResponse
    {
        try {
            $this->eventService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Person created successfully');
    }
}
