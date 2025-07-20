<?php

namespace App\Services\Interfaces;

use App\DTO\BandDTO;
use App\Models\Band;

interface BandServiceInterface
{
    const BAND_CATALOG_PHOTO_DIRECTORY = 'band/photo';

    public function create(BandDTO $bandDTO): Band;

}
