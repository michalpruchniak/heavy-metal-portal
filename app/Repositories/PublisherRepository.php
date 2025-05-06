<?php

namespace App\Repositories;

use App\Models\Publisher;
use App\Repositories\Interfaces\PublisherRepositoryInterface;

class PublisherRepository extends BaseRepository implements PublisherRepositoryInterface
{
    public function __construct(Publisher $model)
    {
        parent::__construct($model);
    }
}
