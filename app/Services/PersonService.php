<?php

namespace App\Services;

use App\DTO\PersonDTO;
use App\Models\Person;
use App\Repositories\Interfaces\PersonRepositoryInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PersonServiceInterface;
use Illuminate\Database\Eloquent\Collection;

class PersonService implements PersonServiceInterface{
    public function __construct(
        private readonly PersonRepositoryInterface $personRepository,
        private readonly FileUploadServiceInterface $fileUploadService

    ) {}

    public function getAll(array $order = ['created_at' => 'desc']): Collection
    {
        return $this->personRepository->get(order: $order);
    }

    public function create(PersonDTO $personDTO): Person
    {
        $personData = $personDTO->toArray();

        $personData['img'] = $this->fileUploadService->saveOrUpdatePhoto(null, $personDTO->img, self::PERSON_CATALOG_PHOTO_DIRECTORY);
        $person = $this->personRepository->create($personData);

        return $person;
    }

}
