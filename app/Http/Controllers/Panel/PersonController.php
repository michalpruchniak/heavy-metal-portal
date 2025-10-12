<?php

namespace App\Http\Controllers\Panel;

use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\PersonRequest;
use App\Services\Interfaces\PersonServiceInterface;
use App\Traits\SharePermissions;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class PersonController extends Controller
{
    use SharePermissions;

    public function __construct(private readonly PersonServiceInterface $personService)
    {

        $this->authorizePermissions(
            [
                PermissionEnum::PEOPLE_INDEX->value => ['index'],
                PermissionEnum::PEOPLE_CREATE->value => ['create', 'store'],
                PermissionEnum::PEOPLE_EDIT->value => ['edit', 'update'],
            ]
        );
    }

    public function index(): Response
    {
        $people = Cache::remember('people_all', config('settings.cookies_expires'), function () {
            return $this->personService->getAll();
        });

        return Inertia::render('people/index', [
            'people' => $people,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('people/create');
    }

    public function store(PersonRequest $request): RedirectResponse
    {
        try {
            $this->personService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('people.index')->with('success', 'Person created successfully');
    }

    public function edit(int $person): Response
    {
        $person = $this->personService->findOrFail($person);

        return Inertia::render('people/create', [
            'person' => $person,
        ]);
    }

    public function update(int $id, PersonRequest $request): RedirectResponse
    {
        try {
            $this->personService->update($id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('people.index')->with('success', 'Person updated successfully');
    }
}
