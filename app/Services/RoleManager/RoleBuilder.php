<?php

namespace App\Services\RoleManager;


class RoleBuilder {
    private $role;

    public function __construct()
    {
        $this->reset();
    }

    public function reset(): void
    {
        $this->role = new RoleProduct();
    }

    public function setRoleName(string $name)
    {
        $this->role->setName($name);
    }

    public function setPermission(string $permission)
    {
        $this->role->setPermission($permission);
    }

    public function getRole()
    {
        $result = $this->role->getRole();
        $this->reset();

        return $result;
    }
}
