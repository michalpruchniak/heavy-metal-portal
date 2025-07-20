<?php

namespace App\Repositories;

use App\Models\Band;
use App\Repositories\Interfaces\PersonRepositoryInterface;

class BandRepository extends BaseRepository implements PersonRepositoryInterface
{
    public function __construct(Band $model)
    {
        parent::__construct($model);
    }
}
