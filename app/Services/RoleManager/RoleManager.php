<?php

namespace App\Services\RoleManager;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleManager {
    private $builder;

    function __construct()
    {
        $this->builder = new RoleBuilder();
    }

    public function buildAdminPermission()
    {
        $roleVo = $this->getAdminPermissions();

        $role = Role::firstOrCreate(['name' => $roleVo->getName()]);

        foreach ($roleVo->getPermissions() as $permissionName) {
            $permission = Permission::firstOrCreate(['name' => $permissionName]);
            $role->givePermissionTo($permission);
        }

    }

    private function getAdminPermissions()
    {
        $this->builder->setRoleName('adminaaaaa');
        $this->builder->setPermission('publishers.view');

        return $this->builder->getRole();
    }
}