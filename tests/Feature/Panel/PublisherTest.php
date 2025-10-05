<?php

use App\Models\Publisher;
use App\Models\User;
use App\Traits\CreateRolesAndPermissions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

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

test('publisher page is only for moderator and admin', function () {

    $this->actingAs($this->admin)
        ->get(route('publishers.index'))
        ->assertOk();

    $this->actingAs($this->moderator)
        ->get(route('publishers.index'))
        ->assertOk();
});

test('publishers page is disabled for guests and users without role', function () {
    $this->actingAs($this->user)
        ->get(route('publishers.index'))
        ->assertForbidden();
});

test('publisher create page is only for moderator and admin', function () {
    $this->actingAs($this->admin)
        ->get(route('publishers.create'))
        ->assertOk();

    $this->actingAs($this->moderator)
        ->get(route('publishers.create'))
        ->assertOk();
});

test('publisher create page is disabled for guests and users without role', function () {
    $this->actingAs($this->user)
        ->get(route('publishers.create'))
        ->assertForbidden();
});

test('publisher edit page is only for moderator and admin', function () {
    $publisher = Publisher::factory()->create();

    $this->actingAs($this->admin)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertOk();

    $this->actingAs($this->moderator)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertOk();
});

test('publisher edit page is disabled for guests and users without role', function () {
    $publisher = Publisher::factory()->create();

    $this->actingAs($this->user)
        ->get(route('publishers.edit', ['publisher' => $publisher->id]))
        ->assertForbidden();
});

test('new publisher can be added', function () {

    Storage::fake('public');

    $image = UploadedFile::fake()->image('logo.jpg');

    $response = $this->actingAs($this->admin)->post(route('publishers.store'), [
        'name' => 'Test Publisher',
        'logo' => $image,
        'url' => 'http://testpublisher.com',
        'description' => 'Test description of the publisher that is within the character limits.',
    ]);

    $response->assertRedirect(route('publishers.index'));

    $this->assertDatabaseHas('publishers', [
        'name' => 'Test Publisher',
        'url' => 'http://testpublisher.com',
        'description' => 'Test description of the publisher that is within the character limits.',
    ]);
});

test('publisher validation test', function () {

    $response = $this
        ->actingAs($this->admin)
        ->post(route('publishers.store'), [
            'logo' => null,
            'url' => 'wrong-utl',
            'description' => $this->faker->words(2500, true),
        ]);

    $response->assertSessionHasErrors(['name', 'logo', 'description']);
});
