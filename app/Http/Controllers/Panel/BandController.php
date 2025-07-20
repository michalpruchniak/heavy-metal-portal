<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\BandRequest;
use App\Services\Interfaces\BandServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BandController extends Controller
{
    public function __construct(private readonly BandServiceInterface $bandService) {}

    public function create(): Response
    {
        return Inertia::render('bands/create');

    }

    public function store(BandRequest $request): RedirectResponse
    {
        try {
            $this->bandService->create($request->getDTO());
        } catch (Exception $e) {
            dd($e);
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('people.index')->with('success', 'Person created successfully');
    }
}
