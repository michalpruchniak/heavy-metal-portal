<?php

namespace App\Http\Middleware;

use App\Enums\PermissionEnum;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

/**
 * Middleware odpowiedzialne za udostępnianie uprawnień (permissions)
 * do warstwy Inertia.
 */
final class PermissionMiddleware
{
    private array $globalPermissions;
    private array $resources;

    public function __construct()
    {
        $this->globalPermissions = config('permissionShare')['global'];
        $this->resources = config('permissionShare')['resources'];
    }

    public function handle(Request $request, Closure $next): Response
    {

        return $next($request);
    }

}
