<?php
namespace App\Services\RoleManager;

use App\VO\RoleVo;

class RoleProduct
{
    private string $name;
    private array $permissions = [];

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setPermission(string $permission): void
    {
        $this->permissions[] = $permission;
    }

    public function getRole(): RoleVo
    {
        return new RoleVo(
            name: $this->name,
            permissions: $this->permissions
        );

    }
}