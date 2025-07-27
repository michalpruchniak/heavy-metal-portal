<?php

namespace App\Services\Interfaces;

use App\DTO\BandDTO;
use App\Models\Band;
use Illuminate\Database\Eloquent\Collection;

interface BandServiceInterface
{
    const BAND_CATALOG_PHOTO_DIRECTORY = 'band/photo';

    public function getAll(array $order = ['created_at' => 'desc']): Collection;

    public function findOrFail(int $id): Band;

    public function create(BandDTO $bandDTO): Band;

    public function update(int $id, BandDTO $bandDTO): Band;
}
