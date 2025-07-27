<?php

namespace App\Repositories;

use App\Models\Band;
use App\Repositories\Interfaces\BandRepositoryInterface;

class BandRepository extends BaseRepository implements BandRepositoryInterface
{
    public function __construct(Band $model)
    {
        parent::__construct($model);
    }
}
