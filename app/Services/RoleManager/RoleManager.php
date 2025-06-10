<?php

namespace App\Services\RoleManager;

use App\Services\RoleManager\Interfaces\RoleManagerInterface;
use App\VO\RoleVo;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleManager implements RoleManagerInterface {
    private $builder;

    function __construct()
    {
        $this->builder = new RoleBuilder();
    }

    public function buildAdminPermission(): void
    {
        $roleVo = $this->getAdminPermissions();
        $role = Role::firstOrCreate(['name' => $roleVo->getName()]);

        foreach ($roleVo->getPermissions() as $permissionName) {
            $permission = Permission::firstOrCreate(['name' => $permissionName]);
            $role->givePermissionTo($permission);
        }
    }

    private function getAdminPermissions(): RoleVo
    {
        $this->builder->setRoleName('admina');
        $this->builder->setPermission('publishers.view');

        return $this->builder->getRole();
    }
}