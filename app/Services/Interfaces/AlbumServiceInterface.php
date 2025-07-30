<?php

namespace App\Services\Interfaces;

use App\DTO\AlbumDTO;
use App\Models\Album;

interface AlbumServiceInterface
{
    const ALBUM_CATALOG_COVER_DIRECTORY = 'album/cover';


    public function findOrFail(int $id): Album;

    public function create(AlbumDTO $albumDTO): Album;

}
