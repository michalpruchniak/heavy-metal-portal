<?php

namespace App\Services;

use App\Repositories\Interfaces\PersonRepositoryInterface;
use App\Services\Interfaces\PersonServiceInterface;
use Illuminate\Database\Eloquent\Collection;

class PersonService implements PersonServiceInterface{
    public function __construct(
        private readonly PersonRepositoryInterface $personRepository,
    ) {}

    public function getAll(array $order = ['created_at' => 'desc']): Collection
    {
        return $this->personRepository->get(order: $order);
    }

}
