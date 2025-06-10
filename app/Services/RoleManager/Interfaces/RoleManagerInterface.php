<?php
namespace App\Services\RoleManager\Interfaces;

interface RoleManagerInterface {
    public function buildAdminPermission(): void;
}