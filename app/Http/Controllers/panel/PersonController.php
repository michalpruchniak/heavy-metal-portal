<?php

namespace App\Http\Controllers\panel;

use App\Http\Controllers\Controller;
use App\Services\PersonService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonController extends Controller
{
    public function __construct(private readonly PersonService $personService) {}

    public function index()
    {
        $people = $this->personService->getAll();

        return Inertia::render('people/index', [
            'people' => $people,
        ]);
    }
}
