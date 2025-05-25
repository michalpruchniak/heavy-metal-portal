<?php

namespace App\VO;

class RoleVo {
    private string $name;
    private array $permissions;

    function __construct(string $name, array $permissions = [])
    {
        $this->name = $name;
        $this->permissions = $permissions;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getPermissions(): array
    {
        return $this->permissions;
    }
}
