<?php

namespace App\Services;

use App\DTO\AlbumDTO;
use App\Models\Album;
use App\Repositories\Interfaces\AlbumRepositoryInterface;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use Illuminate\Database\Eloquent\Collection;

class AlbumService implements AlbumServiceInterface
{
    public function __construct(
        private readonly AlbumRepositoryInterface $albumRepository,
        private readonly FileUploadServiceInterface $fileUploadService,

    ) {}

    public function getAll(array $order = ['created_at' => 'desc'], int $limit = 20): Collection
    {
        return $this->albumRepository->get(order: $order, limit: $limit);
    }

    public function otherAlbumsThisBand(int $band, ?array $order = [], ?array $relationships = [], ?int $limit = 10)
    {
        return $this->albumRepository->get(where: ['band_id' => $band], order: $order, relationships: $relationships, limit: $limit);
    }

    public function findOrFail(int $id, array $relationships = []): Album
    {
        return $this->albumRepository->findOrFail(id: $id, relationships: $relationships);
    }

    public function firstOrFail(array $where = [], array $relationships = []): Album
    {
        return $this->albumRepository->firstOrFail(where: $where, relationships: $relationships);
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

    public function search(string $search): Collection
    {
        return $this->albumRepository->search($search);
    }
}
