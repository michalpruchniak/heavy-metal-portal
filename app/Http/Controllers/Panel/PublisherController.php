<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\PublisherRequest;
use App\Http\Requests\UpdatePublisherRequest;
use App\Services\Interfaces\PublisherServiceInterface;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PublisherController extends Controller
{
    public function __construct(private readonly PublisherServiceInterface $publisherService) {}

    public function index(): Response
    {
        $publishers = $this->publisherService->getAll();

        return Inertia::render('publishers/index', [
            'publishers' => $publishers,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('publishers/create');
    }

    public function store(PublisherRequest $request): RedirectResponse
    {
        try {
            $this->publisherService->create($request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('publishers.index')->with('success', 'Publisher created successfully');
    }

    public function edit(int $publisher): Response
    {
        $publisher = $this->publisherService->findOrFail($publisher);

        return Inertia::render('publishers/create', [
            'publisher' => $publisher,
        ]);
    }

    public function update(int $id, UpdatePublisherRequest $request): RedirectResponse
    {
        try {
            $this->publisherService->update($id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('publishers.index')->with('success', 'Publisher updated successfully');
    }
}
