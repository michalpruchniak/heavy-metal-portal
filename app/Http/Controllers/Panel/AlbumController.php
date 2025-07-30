<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AlbumController extends Controller
{
    public function create(int $bandId): Response
    {
        return Inertia::render('albums/create', [
            'bandId' => $bandId
        ]);
    }
}
