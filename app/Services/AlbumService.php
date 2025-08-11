<?php

namespace App\Services;

use App\DTO\AlbumDTO;
use App\Models\Album;
use App\Repositories\Interfaces\AlbumRepositoryInterface;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;

class AlbumService implements AlbumServiceInterface
{
    public function __construct(
        private readonly AlbumRepositoryInterface $albumRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function findOrFail(int $id): Album
    {
        return $this->albumRepository->findOrFail(id: $id);
    }

    public function create(AlbumDTO $albumDTO): Album
    {
        $albumData = $albumDTO->toArray();
        $albumData['cover'] = $this->fileUploadService->saveOrUpdatePhoto(null, $albumDTO->cover, self::ALBUM_CATALOG_COVER_DIRECTORY);
        $album = $this->albumRepository->create($albumData);
        return $album;
    }

    public function update(int $id, AlbumDTO $albumDTO): Album
    {
        $album = $this->albumRepository->findOrFail($id);
        $albumData = $albumDTO->toArray();
        $albumData['cover'] = $this->fileUploadService->saveOrUpdatePhoto($album->getRawOriginal('cover'), $albumDTO->cover, self::ALBUM_CATALOG_COVER_DIRECTORY);
        $album->update($albumData);
        return $album->refresh();
    }
}
