<?php

namespace App\Http\Controllers\Panel;

use App\Enums\AppGroupsEnum;
use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\BandRequest;
use App\Http\Resources\BandEditResource;
use App\Models\Band;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\PersonServiceInterface;
use App\Traits\SharePermissions;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class BandController extends Controller
{
    use SharePermissions;

    public function __construct(
        private readonly BandServiceInterface $bandService,
        private readonly PersonServiceInterface $personService
    ) {
        $this->sharePermissions(AppGroupsEnum::BANDS);

        $this->authorizePermissions(
            [
                PermissionEnum::BANDS_INDEX->value => ['index'],
                PermissionEnum::BANDS_CREATE->value => ['create', 'store'],
                PermissionEnum::BANDS_EDIT->value => ['edit', 'update'],
            ]
        );
    }

    public function index(): Response
    {
        $bands = Cache::remember('bands_all', config('settings.cookies_expires'), function () {
            return $this->bandService->getAll();
        });

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

    public function edit(Band $band): Response
    {
        return Inertia::render('bands/create', [
            'band' => new BandEditResource($band),
        ]);
    }

    public function update(Band $band, BandRequest $request): RedirectResponse
    {
        try {
            $this->bandService->update($band->id, $request->getDTO());
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

        return redirect()->route('bands.index')->with('success', 'Band updated successfully');
    }
}
