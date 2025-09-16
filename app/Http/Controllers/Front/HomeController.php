<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Services\Interfaces\AlbumServiceInterface;
use Carbon\Carbon;
use Inertia\Inertia;
use Carbon\CarbonPeriod;

class HomeController extends Controller
{
    public function __construct(private AlbumServiceInterface $albumService) {}

    public function Home()
    {
        $startDate = Carbon::today();
        $endDate = Carbon::today()->addDays(6);

        $events = Event::whereBetween('date', [
                $startDate->toDateString(),
                $endDate->toDateString(),
            ])
            ->orderBy('date')
            ->get()
            ->groupBy('date');

        $dates = collect(CarbonPeriod::create($startDate, $endDate))
            ->mapWithKeys(fn ($date) => [
                $date->toDateString() => $events->get($date->toDateString(), collect()),
            ]);

        return Inertia::render('frontend/index', [
            'albums' => $this->albumService->getAll(),
            'events' => $dates,
        ]);
    }

}
