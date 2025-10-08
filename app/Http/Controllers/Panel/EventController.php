<?php

namespace App\Http\Controllers\Panel;

use App\Enums\AppGroupsEnum;
use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Services\Interfaces\EventServiceInterface;
use App\Traits\SharePermissions;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    use SharePermissions;

    public function __construct(
        private readonly EventServiceInterface $eventService
    ) {

        $this->authorizePermissions(
            [
                PermissionEnum::EVENTS_INDEX->value => ['index'],
                PermissionEnum::EVENTS_CREATE->value => ['create', 'store'],
                PermissionEnum::EVENTS_EDIT->value => ['edit', 'update'],
            ]
        );

    }

    public function index(): Response
    {
        $events = Cache::remember('events_all', config('settings.cookies_expires'), function () {
            return $this->eventService->getAll();
        });

        return Inertia::render('events/index', [
            'events' => $events,
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

        return redirect()->route('events.index')->with('success', 'Person created successfully');
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('events/create', [
            'event' => $event,
        ]);
    }

    public function update(Event $event, EventRequest $request): RedirectResponse
    {
        try {
            $this->eventService->update($event->id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('events.index')->with('success', 'Person updated successfully');
    }
}
