<?php

namespace App\Services\Interfaces;

use App\DTO\AlbumDTO;
use App\Models\Album;
use Illuminate\Support\Collection;

interface AlbumServiceInterface
{
    const ALBUM_CATALOG_COVER_DIRECTORY = 'album/cover';

    public function getAll(array $order = ['created_at' => 'desc'], int $limit = 20): Collection;

    public function findOrFail(int $id): Album;

    public function create(AlbumDTO $albumDTO): Album;

    public function update(int $id, AlbumDTO $albumDTO): Album;
}
