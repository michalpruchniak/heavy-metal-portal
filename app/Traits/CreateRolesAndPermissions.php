<?php

namespace App\Traits;

use App\Enums\PermissionEnum;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

trait CreateRolesAndPermissions
{
    private array $moderatorPermissions = [
        PermissionEnum::PUBLISHERS_INDEX->value,
        PermissionEnum::PUBLISHERS_CREATE->value,
        PermissionEnum::PUBLISHERS_EDIT->value,

        PermissionEnum::PEOPLE_INDEX->value,
        PermissionEnum::PEOPLE_CREATE->value,
        PermissionEnum::PEOPLE_EDIT->value,

        PermissionEnum::BANDS_INDEX->value,
        PermissionEnum::BANDS_CREATE->value,
        PermissionEnum::BANDS_EDIT->value,

        PermissionEnum::ALBUMS_INDEX->value,
        PermissionEnum::ALBUMS_CREATE->value,
        PermissionEnum::ALBUMS_EDIT->value,

        PermissionEnum::EVENTS_INDEX->value,
        PermissionEnum::EVENTS_CREATE->value,
        PermissionEnum::EVENTS_EDIT->value,

        PermissionEnum::ARTICLES_INDEX->value,
        PermissionEnum::ARTICLES_CREATE->value,
        PermissionEnum::ARTICLES_EDIT->value,
    ];

    private array $adminPermissions = [];

    private array $defaultRolesPermissions = [];

    public function __construct()
    {
        $this->adminPermissions = array_merge(
            $this->moderatorPermissions,
            [

            ]
        );

        $this->defaultRolesPermissions = [
            'admin' => $this->adminPermissions,
            'moderator' => $this->moderatorPermissions,
        ];
    }

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
