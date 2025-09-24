<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\BandServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class BandController extends Controller
{
    public function __construct(
        private BandServiceInterface $bandService
    ) {}

    public function show(string $band): Response
    {
        $band = $this->bandService->firstOrFail(where: ['slug' => $band], relationships: ['albums']);

        return Inertia::render('frontend/bands/show', ['band' => $band]);

    }
}
