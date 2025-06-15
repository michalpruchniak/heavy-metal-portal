<?php

namespace App\Http\Middleware;

use App\Enums\PersonTypeEnum;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class FormOptionsMiddleware
{
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

        Inertia::share($shares);

        return $next($request);
    }
}
