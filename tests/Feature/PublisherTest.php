<?php

use App\Models\Publisher;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

beforeEach(function () {
    // Uruchom migracje przed każdym testem
    $this->artisan('migrate');

    // Tworzenie ról
    Role::firstOrCreate(['name' => 'admin']);
    Role::firstOrCreate(['name' => 'moderator']);
});

test('publisher page is only for moderator and admin', function () {
    $admin = User::factory()->create();
    $admin->assignRole('admin');

    $this->actingAs($admin)
        ->get(route('publishers.index'))
        ->assertOk();

    $moderator = User::factory()->create();
    $moderator->assignRole('moderator');

    $this->actingAs($moderator)
        ->get(route('publishers.index'))
        ->assertOk();
});

test('publishers page is disabled for guests and users without role', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('publishers.index'))
        ->assertForbidden();
});

test('publisher create page is only for moderator and admin', function () {
    $admin = User::factory()->create();
    $admin->assignRole('admin');

    $this->actingAs($admin)
        ->get(route('publishers.create'))
        ->assertOk();

    $moderator = User::factory()->create();
    $moderator->assignRole('moderator');

    $this->actingAs($moderator)
        ->get(route('publishers.create'))
        ->assertOk();
});

test('publisher create page is disabled for guests and users without role', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('publishers.create'))
        ->assertForbidden();
});

test('publisher edit page is only for moderator and admin', function () {
    $admin = User::factory()->create();
    $publisher = Publisher::factory()->create();

    $admin->assignRole('admin');

    $this->actingAs($admin)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertOk();

    $moderator = User::factory()->create();
    $moderator->assignRole('moderator');

    $this->actingAs($moderator)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertOk();
});

test('publisher edit page is disabled for guests and users without role', function () {
    $user = User::factory()->create();
    $publisher = Publisher::factory()->create();

    $this->actingAs($user)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertForbidden();
});
