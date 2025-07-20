<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BandController extends Controller
{
    public function create()
    {
        return Inertia::render('bands/create');

    }
}
