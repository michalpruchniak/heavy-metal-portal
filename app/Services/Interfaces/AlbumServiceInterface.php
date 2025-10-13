<?php

namespace App\Services\Interfaces;

use App\DTO\AlbumDTO;
use App\Models\Album;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface AlbumServiceInterface
{
    const ALBUM_CATALOG_COVER_DIRECTORY = 'album/cover';

    public function getAll(?array $order = ['created_at' => 'desc'], ?int $paginate = null): Collection|LengthAwarePaginator;

    public function otherAlbumsThisBand(int $band, ?array $order = [], ?array $relationships = [], ?int $limit = 10);

    public function findOrFail(int $id, array $relationships = []): Album;

    public function firstOrFail(array $where = [], array $relationships = []): Album;

    public function create(AlbumDTO $albumDTO): Album;

    public function update(int $id, AlbumDTO $albumDTO): Album;

    public function search(string $search): Collection;
}
