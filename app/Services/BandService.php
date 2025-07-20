<?php
namespace App\Services;

use App\DTO\BandDTO;
use App\Models\Band;
use App\Repositories\Interfaces\BandRepositoryInterface;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;

class BandService implements BandServiceInterface
{
    public function __construct(
        private readonly BandRepositoryInterface $bandRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function create(BandDTO $bandDTO): Band
    {
        $bandData = $bandDTO->toArray();

        $bandData['logo'] = $this->fileUploadService->saveOrUpdatePhoto(null, $bandDTO->logo, self::BAND_CATALOG_PHOTO_DIRECTORY);
        $band = $this->bandRepository->create($bandData);

        return $band;
    }
}