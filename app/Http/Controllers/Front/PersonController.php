<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\PersonServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class PersonController extends Controller
{
    public function __construct(
        private PersonServiceInterface $personService,
    ) {}

    public function show(string $person): Response
    {
        $person = $this->personService->firstOrFail(where: ['slug' => $person], relationships: ['bands']);

        return Inertia::render('frontend/people/show', ['person' => $person]);
    }
}
