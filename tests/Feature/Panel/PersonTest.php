<?php

use App\Enums\PersonTypeEnum;
use App\Models\Person;
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

test('people page index is only for moderator and admin', function () {
    $this->actingAs($this->admin)
        ->get(route('people.index'))
        ->assertOk();
    $this->actingAs($this->moderator)
        ->get(route('people.index'))
        ->assertOk();
});

test('people page is disabled for guests and users without role', function () {
    $this->actingAs($this->user)
        ->get(route('people.index'))
        ->assertForbidden();
});

test('people create page is only for moderator and admin', function () {
    $this->actingAs($this->admin)
        ->get(route('people.create'))
        ->assertOk();

    $this->actingAs($this->moderator)
        ->get(route('people.create'))
        ->assertOk();
});

test('people create page is disabled for guests and users without role', function () {
    $this->actingAs($this->user)
        ->get(route('people.create'))
        ->assertForbidden();
});

test('people edit page is only for moderator and admin', function () {
    $person = Person::factory()->create();

    $this->actingAs($this->admin)
        ->get(route('people.edit', ['person' => $person->slug]))
        ->assertOk();

    $this->actingAs($this->moderator)
        ->get(route('people.edit', ['person' => $person->slug]))
        ->assertOk();
});

test('people edit page is disabled for guests and users without role', function () {
    $person = Person::factory()->create();

    $this->actingAs($this->user)
        ->get(route('people.edit', ['person' => $person->slug]))
        ->assertForbidden();
});

test('new person can be added', function () {
    Storage::fake('public');
    $photo = UploadedFile::fake()->image('photo.jpg');
    $bio = str_repeat('A', 51);
    $response = $this->actingAs($this->admin)->post(route('people.store'), [
        'name' => 'John Doe',
        'bio' => $bio,
        'DOB' => null,
        'img' => $photo,
        'type' => PersonTypeEnum::ARTIST->value,
    ]);

    $response->assertRedirect(route('people.index'));

    $this->assertDatabaseHas('people', [
        'name' => 'John Doe',
        'bio' => $bio,
        'DOB' => null,
        'type' => PersonTypeEnum::ARTIST->value,
    ]);
});
