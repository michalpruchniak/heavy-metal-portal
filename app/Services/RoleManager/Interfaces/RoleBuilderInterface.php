<?php
namespace App\Services\RoleManager\Interfaces;

use App\VO\RoleVo;

interface RoleBuilderInterface {
    public function reset(): void;
    public function setRoleName(string $name): void;
    public function setPermission(string $permission): void;
    public function getRole(): RoleVo;

}