<?php

namespace App\Services;

use App\DTO\BandDTO;
use App\Models\Band;
use App\Repositories\Interfaces\BandRepositoryInterface;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use Illuminate\Database\Eloquent\Collection;

class BandService implements BandServiceInterface
{
    public function __construct(
        private readonly BandRepositoryInterface $bandRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function getAll(array $order = ['created_at' => 'desc']): Collection
    {
        return $this->bandRepository->get(order: $order);
    }

    public function findOrFail(int $id): Band
    {
        return $this->bandRepository->findOrFail(id: $id, relationships: ['people']);
    }

    public function create(BandDTO $bandDTO): Band
    {
        $bandData = $bandDTO->toArray();

        $bandData['logo'] = $this->fileUploadService->saveOrUpdatePhoto(null, $bandDTO->logo, self::BAND_CATALOG_PHOTO_DIRECTORY);
        $band = $this->bandRepository->create($bandData);
        $band->people()->sync($bandDTO->people);

        return $band;
    }

    public function update(int $id, BandDTO $bandDTO): Band
    {
        $band = $this->bandRepository->findOrFail($id);
        $bandData = $bandDTO->toArray();
        $bandData['logo'] = $this->fileUploadService->saveOrUpdatePhoto($band->getRawOriginal('logo'), $bandDTO->logo, self::BAND_CATALOG_PHOTO_DIRECTORY);

        $band->update($bandData);
        $band->people()->sync($bandDTO->people);

        return $band->refresh();
    }
}
