<?php

namespace App\Repositories;

use App\Models\Person;
use App\Repositories\Interfaces\PublisherRepositoryInterface;

class PersonRepository extends BaseRepository implements PublisherRepositoryInterface
{
    public function __construct(Person $model)
    {
        parent::__construct($model);
    }
}
