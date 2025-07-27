<?php

namespace App\Repositories;

use App\Models\Person;
use App\Repositories\Interfaces\PersonRepositoryInterface;

class PersonRepository extends BaseRepository implements PersonRepositoryInterface
{
    public function __construct(Person $model)
    {
        parent::__construct($model);
    }
}
