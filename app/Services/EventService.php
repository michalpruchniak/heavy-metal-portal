<?php

namespace App\Services;

use App\DTO\BandDTO;
use App\DTO\EventDTO;
use App\Models\Band;
use App\Models\Event;
use App\Repositories\Interfaces\EventRepositoryInterface;
use App\Services\Interfaces\EventServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class EventService implements EventServiceInterface
{
    public function __construct(
        private readonly EventRepositoryInterface $eventRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function getAll(array $order = ['created_at' => 'desc']): Collection
    {
        return Cache::remember('all_events', 60, function () use ($order) {
            return $this->eventRepository->get(order: $order);
        });
    }

    // public function findOrFail(int $id): Band
    // {
    //     return $this->bandRepository->findOrFail(id: $id, relationships: ['people']);
    // }

    public function create(EventDTO $eventDTO): Event
    {
        $eventData = $eventDTO->toArray();

        $eventData['cover'] = $this->fileUploadService->saveOrUpdatePhoto(null, $eventDTO->cover, self::EVENT_CATALOG_COVER_DIRECTORY);
        $event = $this->eventRepository->create($eventData);

        return $event;
    }

    // public function update(int $id, BandDTO $bandDTO): Band
    // {
    //     $band = $this->bandRepository->findOrFail($id);
    //     $bandData = $bandDTO->toArray();
    //     $bandData['logo'] = $this->fileUploadService->saveOrUpdatePhoto($band->getRawOriginal('logo'), $bandDTO->logo, self::BAND_CATALOG_PHOTO_DIRECTORY);

    //     $band->update($bandData);
    //     $band->people()->sync($bandDTO->people);

    //     return $band->refresh();
    // }
}
