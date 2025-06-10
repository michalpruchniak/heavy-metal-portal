<?php

use App\Models\User;
use App\Traits\CreateRolesAndPermissions;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class, CreateRolesAndPermissions::class);

beforeEach(function () {
    $this->createDefaultRolesAndPermissions();

    $this->admin = User::factory()->create();
    $this->admin->assignRole('admin');

    $this->moderator = User::factory()->create();
    $this->moderator->assignRole('moderator');

    $this->user = User::factory()->create();

    $this->faker = Faker\Factory::create();

});