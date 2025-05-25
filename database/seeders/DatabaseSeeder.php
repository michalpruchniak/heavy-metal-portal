<?php

namespace Database\Seeders;

use App\Models\PersonPosition;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserTableSeeder::class,
            PublisherTableSeeder::class,
            PersonPositionTableSeeder::class
        ]);
    }
}
