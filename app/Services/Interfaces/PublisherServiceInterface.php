<?php

namespace App\Services\Interfaces;

use App\DTO\PublisherDTO;
use App\Models\Publisher;

interface PublisherServiceInterface
{
    const PUBLISHER_CATALOG_LOGO_DIRECTORY = 'publisher/logo';

    public function create(PublisherDTO $publisherDTO): Publisher;
    public function findOrFail(int $id): Publisher;
    public function update(int $id, PublisherDTO $publisherDTO): Publisher;


}
