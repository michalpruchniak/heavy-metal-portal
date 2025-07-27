<?php

namespace App\Http\Middleware;

use App\Enums\PersonTypeEnum;
use App\Services\Interfaces\PersonServiceInterface;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class FormOptionsMiddleware
{
    public function __construct(
        private readonly PersonServiceInterface $personService
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
            $shares['personType'] = PersonTypeEnum::values();
        }

        if ($request->routeIs('bands.create') || $request->routeIs('bands.edit')) {
            $shares['peopleOptions'] = $this->personService->getMapPeopleArray();
        }

        Inertia::share($shares);

        return $next($request);
    }
}
