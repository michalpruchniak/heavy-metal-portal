<?php

namespace App\Repositories;

use App\Models\Album;
use App\Repositories\Interfaces\AlbumRepositoryInterface;

class AlbumRepository extends BaseRepository implements AlbumRepositoryInterface
{
    public function __construct(Album $model)
    {
        parent::__construct($model);
    }
}
