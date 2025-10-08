<?php

namespace App\Http\Controllers\Panel;

use App\Enums\AppGroupsEnum;
use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\PublisherRequest;
use App\Http\Requests\UpdatePublisherRequest;
use App\Models\Publisher;
use App\Services\Interfaces\PublisherServiceInterface;
use App\Traits\SharePermissions;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class PublisherController extends Controller
{
    use SharePermissions;

    public function __construct(private readonly PublisherServiceInterface $publisherService)
    {
        $this->sharePermissions(AppGroupsEnum::PUBLISHERS);

        $this->authorizePermissions(
            [
                PermissionEnum::PUBLISHERS_INDEX->value => ['index'],
                PermissionEnum::PUBLISHERS_CREATE->value => ['create', 'store'],
                PermissionEnum::PUBLISHERS_EDIT->value => ['edit', 'update'],
            ]
        );
    }

    public function index(): Response
    {
        $publishers = Cache::remember('publishers_all', config('settings.cookies_expires'), function () {
            return $this->publisherService->getAll();
        });

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

    public function edit(Publisher $publisher): Response
    {
        return Inertia::render('publishers/create', [
            'publisher' => $publisher,
        ]);
    }

    public function update(Publisher $publisher, UpdatePublisherRequest $request): RedirectResponse
    {
        try {
            $this->publisherService->update($publisher->id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('publishers.index')->with('success', 'Publisher updated successfully');
    }
}
