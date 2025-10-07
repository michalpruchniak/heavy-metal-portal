<?php

namespace App\Traits;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

trait SharePermissions
{
    public static function share(string $type): array
    {
        $user = Auth::user();

        $permissions = array_merge(
            config('permissionShare')['global'] ?? [],
            config('permissionShare')[$type] ?? []
        );

        $permissionsWithAccess = [];

        foreach ($permissions as $permission) {
            $permissionsWithAccess[$permission] = $user
                ? $user->hasPermissionTo($permission)
                : false;
        }

        return $permissionsWithAccess;
    }

    public static function shareInertia(string $type): void
    {
        Inertia::share([
            'permissions' => self::share($type),
        ]);
    }
}
