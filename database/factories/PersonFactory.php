<?php

namespace Database\Factories;

use App\Enums\PersonTypeEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'aka' => fake()->optional()->userName(),
            'bio' => fake()->paragraph(),
            'DOB' => fake()->optional()->date(),
            'img' => null,
            'type' => fake()->randomElement(PersonTypeEnum::values()),
        ];
    }
}
