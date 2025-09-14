<?php

namespace App\Services\Interfaces;

use App\DTO\BandDTO;
use App\DTO\EventDTO;
use App\Models\Event;
use Illuminate\Support\Collection;

interface EventServiceInterface
{
    const EVENT_CATALOG_COVER_DIRECTORY = 'event/cover';

    public function getAll(array $order = ['created_at' => 'desc']): Collection;

    // public function findOrFail(int $id): Band;

    public function create(EventDTO $eventDTO): Event;

    // public function update(int $id, BandDTO $bandDTO): Band;
}
