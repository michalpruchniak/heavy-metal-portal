<?php

namespace App\Http\Middleware;

use App\Services\Interfaces\PersonServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class FormOptionsMiddleware
{
    public function __construct(
        private readonly PersonServiceInterface $personService,
        private readonly PublisherServiceInterface $publisherService,
    ) {}

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $shares = [];

        if ($request->routeIs('people.create') || $request->routeIs('people.edit')) {
            $shares['personType'] = $this->personService->getMapPersonTypeArray();
        }

        if ($request->routeIs('bands.create') || $request->routeIs('bands.edit')) {
            $shares['peopleOptions'] = $this->personService->getMapPeopleArray();
        }

        if ($request->routeIs('bands.albums.create') || $request->routeIs('bands.albums.edit')) {
            $shares['publishersOptions'] = $this->publisherService->getMapPublisherArray();
        }

        Inertia::share($shares);

        return $next($request);
    }
}
