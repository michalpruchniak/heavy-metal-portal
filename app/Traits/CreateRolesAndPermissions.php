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
            'publishers.delete',
            'people.view',
        ],
        'moderator' => [
            'publishers.view',
            'publishers.create',
            'publishers.edit',
            'publishers.delete',
            'people.view',
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
