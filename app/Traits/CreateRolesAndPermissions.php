<?php

namespace App\Traits;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

trait CreateRolesAndPermissions
{
    private array $defaultRolesPermissions = [
        'admin' => [
            'publishers.view',
            'publishers.create',
            'publishers.edit',
            'people.view',
            'bands.view',
            'bands.create',
            'bands.edit',
            'albums.view',
            'albums.create',
            'albums.edit',
        ],
        'moderator' => [
            'publishers.view',
            'publishers.create',
            'publishers.edit',
            'people.view',
            'bands.view',
            'bands.create',
            'bands.edit',
            'albums.view',
            'albums.create',
            'albums.edit',
        ],
    ];

    public function createDefaultRolesAndPermissions(): void
    {
        foreach ($this->defaultRolesPermissions as $role => $permissions) {
            $roleModel = Role::firstOrCreate(['name' => $role]);

            foreach ($permissions as $permissionName) {
                Permission::firstOrCreate(['name' => $permissionName]);
            }

            $roleModel->syncPermissions($permissions);
        }
    }
}
