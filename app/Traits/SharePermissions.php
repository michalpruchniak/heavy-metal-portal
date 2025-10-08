<?php

namespace App\Traits;

trait SharePermissions
{
    protected function authorizePermissions(array $permissions): void
    {
        foreach ($permissions as $permission => $methods) {
            $this->middleware("can:$permission")->only((array) $methods);
        }
    }
}
