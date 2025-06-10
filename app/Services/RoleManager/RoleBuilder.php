<?php

namespace App\Services\RoleManager;

use App\Services\RoleManager\Interfaces\RoleBuilderInterface;
use App\VO\RoleVo;

class RoleBuilder implements RoleBuilderInterface {
    private $role;

    public function __construct()
    {
        $this->reset();
    }

    public function reset(): void
    {
        $this->role = new RoleProduct();
    }

    public function setRoleName(string $name): void
    {
        $this->role->setName($name);
    }

    public function setPermission(string $permission): void
    {
        $this->role->setPermission($permission);
    }

    public function getRole(): RoleVo
    {
        $result = $this->role->getRole();
        $this->reset();

        return $result;
    }
}
