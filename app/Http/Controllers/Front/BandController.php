<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Band;
use Inertia\Inertia;
use Inertia\Response;

class BandController extends Controller
{

    public function show(Band $band): Response
    {
        $band->load(['albums', 'people']);

        return Inertia::render('frontend/bands/show', ['band' => $band]);

    }
}
