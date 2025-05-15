<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'test@test.pl',
            'password' => Hash::make('password'),
        ]);

        $roles = [
            'admin',
            'moderator',
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }

        $permissions = [
            'publishers.view',
            'publishers.create',
            'publishers.edit',
            'publishers.delete',
        ];

        $permissionModerator = [
            'publishers.view',
            'publishers.create',
            'publishers.edit',
            'publishers.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        Role::findByName('admin')->syncPermissions($permissions);
        Role::findByName('moderator')->syncPermissions($permissionModerator);

        // Przypisanie roli admina użytkownikowi
        $admin->assignRole('admin');
    }
}
