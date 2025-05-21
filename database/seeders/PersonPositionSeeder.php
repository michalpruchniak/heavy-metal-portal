<?php

namespace Database\Seeders;

use App\Models\PersonPosition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions = [
            'vocalist',
            'guitarist',
            'bassist',
            'drummer',
            'keyboardist',
            'producer',
        ];

        foreach ($positions as $position) {
            PersonPosition::create(['name' => $position]);
        }
    }
}
