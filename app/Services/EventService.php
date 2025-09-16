<?php

namespace App\Services;

use App\DTO\EventDTO;
use App\Models\Event;
use App\Repositories\Interfaces\EventRepositoryInterface;
use App\Services\Interfaces\EventServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class EventService implements EventServiceInterface
{
    public function __construct(
        private readonly EventRepositoryInterface $eventRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function getAll(array $order = ['created_at' => 'desc']): Collection
    {
        return Cache::remember('events_all', 60, function () use ($order) {
            return $this->eventRepository->get(order: $order);
        });
    }

    public function findOrFail(int $id): Event
    {
        return $this->eventRepository->findOrFail(id: $id);
    }

    public function create(EventDTO $eventDTO): Event
    {
        $eventData = $eventDTO->toArray();

        $eventData['cover'] = $this->fileUploadService->saveOrUpdatePhoto(null, $eventDTO->cover, self::EVENT_CATALOG_COVER_DIRECTORY);
        $event = $this->eventRepository->create($eventData);

        return $event;
    }

    public function update(int $id, EventDTO $eventDTO): Event
    {
        $event = $this->eventRepository->findOrFail($id);
        $eventData = $eventDTO->toArray();
        $eventData['cover'] = $this->fileUploadService->saveOrUpdatePhoto($event->getRawOriginal('cover'), $eventDTO->cover, self::EVENT_CATALOG_COVER_DIRECTORY);

        $event->update($eventData);

        return $event->refresh();
    }

    public function getEventsFromLast7Days(): Collection
    {
        $startDate = Carbon::today();
        $endDate = Carbon::today()->addDays(6);

        $groupedEvents = $this->eventRepository->get(between: ['date' => [
            $startDate->toDateString(),
            $endDate->toDateString(), ],
        ],
        )->groupBy('date');

        $eventsByDate = collect(CarbonPeriod::create($startDate, $endDate))
            ->mapWithKeys(fn ($date) => [
                $date->toDateString() => $groupedEvents->get($date->toDateString(), collect()),
            ]);

        return $eventsByDate;
    }
}
