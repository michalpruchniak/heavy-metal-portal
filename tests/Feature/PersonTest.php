<?php

use App\Models\User;
use Database\Seeders\UserTableSeeder;

beforeEach(function () {
    $this->artisan('db:seed', ['--class' => UserTableSeeder::class]);

    $this->admin = User::factory()->create();
    $this->admin->assignRole('admin');

    $this->moderator = User::factory()->create();
    $this->moderator->assignRole('moderator');

    $this->user = User::factory()->create();

    $this->faker = Faker\Factory::create();

});