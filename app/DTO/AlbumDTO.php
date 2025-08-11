<?php

namespace App\DTO;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class AlbumDTO implements Arrayable
{
    public function __construct(
        public readonly int $bandId,
        public readonly ?int $publisherId,
        public readonly string $name,
        public readonly ?string $description,
        public readonly ?string $releaseDate,
        public readonly ?UploadedFile $cover
    ) {}

    public function toArray()
    {
        return [
            'name' => $this->name,
            'band_id' => $this->bandId,
            'publisher_id' => $this->publisherId,
            'description' => $this->description,
            'release_date' => $this->releaseDate,
            'cover' => $this->cover,
        ];
    }
}
