<?php

namespace App\Services;

use App\DTO\PublisherDTO;
use App\Models\Publisher;
use App\Repositories\Interfaces\PublisherRepositoryInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;

class PublisherService implements PublisherServiceInterface
{
    public function __construct(
        private readonly PublisherRepositoryInterface $publisherRepository,
        private readonly FileUploadServiceInterface $fileUploadService
    ) {}

    public function create(PublisherDTO $publisherDTO): Publisher
    {
        $publisherData = $publisherDTO->toArray();

        $publisherData['logo'] = $this->fileUploadService->saveOrUpdatePhoto(null, $publisherDTO->logo, self::PUBLISHER_CATALOG_LOGO_DIRECTORY);
        $publisher = $this->publisherRepository->create($publisherData);

        return $publisher;
    }

    public function findOrFail(int $id): Publisher
    {
        return $this->publisherRepository->findOrFail($id);
    }

    public function update(int $id, PublisherDTO $publisherDTO): Publisher
    {
        $publisher = $this->publisherRepository->findOrFail($id);
        $publisherData = $publisherDTO->toArray();
        $publisherData['logo'] = $this->fileUploadService->saveOrUpdatePhoto($publisher->getRawOriginal('logo'), $publisherDTO->logo, self::PUBLISHER_CATALOG_LOGO_DIRECTORY);

        $publisher->update($publisherData);

        return $publisher->refresh();
    }
}
