<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\BandRequest;
use App\Http\Resources\BandEditResource;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\PersonServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BandController extends Controller
{
    public function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly PersonServiceInterface $personService
    ) {}

    public function index(): Response
    {
        $bands = $this->bandService->getAll();
        return Inertia::render('bands/index', [
            'bands' => $bands,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('bands/create');

    }

    public function store(BandRequest $request): RedirectResponse
    {
        try {
            $this->bandService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Person created successfully');
    }

    public function edit(int $band): Response
    {
        $band = $this->bandService->findOrFail($band);

        return Inertia::render('bands/create', [
            'band' => new BandEditResource($band),
        ]);
    }

    public function update(int $band, BandRequest $request): RedirectResponse
    {
        try {
            $this->bandService->update($band, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Band updated successfully');
    }
}
