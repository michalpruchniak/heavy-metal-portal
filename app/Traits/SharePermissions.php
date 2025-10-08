<?php

namespace App\Traits;

use App\Enums\AppGroupsEnum;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

trait SharePermissions
{
    protected function sharePermissions(AppGroupsEnum $type): void
    {
        Inertia::share([
            'permissions' => $this->getPermissions($type->value),
        ]);
    }

    protected function authorizePermissions(array $permissions): void
    {
        foreach ($permissions as $permission => $methods) {
            $methods = (array) $methods;
            $this->middleware("can:$permission")->only($methods);
        }
    }

    private function getPermissions(string $type): array
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
}
