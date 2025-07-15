<?php

namespace Database\Seeders;

use App\Models\User;
use App\Traits\CreateRolesAndPermissions;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    use CreateRolesAndPermissions;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createDefaultRolesAndPermissions();

        $admin = User::create([
            'name' => config('users.admin_name'),
            'email' => config('users.admin_email'),
            'password' => Hash::make(config('users.admin_password')),
        ]);

        $admin->assignRole('admin');
    }
}
