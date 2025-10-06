<?php

namespace Database\Seeders;

use App\Models\Band;
use Illuminate\Database\Seeder;
use MeiliSearch\Client;

class MeiliSeeder extends Seeder
{
    public function run()
    {
        $client = new Client(config('scout.meilisearch.host'));

        $indices = [
            'bands' => ['name'],
            'albums' => ['name', 'band'],
        ];

        foreach ($indices as $indexName => $attributes) {
            $index = $client->index($indexName);

            $index->updateSettings([
                'searchableAttributes' => $attributes,
                'typoTolerance' => [
                    'enabled' => true,
                    'minWordSizeForTypos' => [
                        'oneTypo' => 5,
                        'twoTypos' => 9,
                    ],
                ],
            ]);

        }
        Band::all()->searchable();
    }
}
