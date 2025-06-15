<?php

namespace App\Services\Interfaces;

use App\DTO\PersonDTO;
use App\Models\Person;
use Illuminate\Database\Eloquent\Collection;

interface PersonServiceInterface
{
    const PERSON_CATALOG_PHOTO_DIRECTORY = 'person/photo';

    public function getAll(array $order = ['created_at' => 'desc']): Collection;

    public function create(PersonDTO $personDTO): Person;
}
