<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Person;
use App\Services\Interfaces\PersonServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class PersonController extends Controller
{
    public function __construct(
        private PersonServiceInterface $personService,
    ) {}

    public function show(Person $person): Response
    {
        $person->load(['bands']);

        return Inertia::render('frontend/people/show', ['person' => $person]);
    }
}
