<?php

namespace App\DTO;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class BandDTO implements Arrayable
{
    public function __construct(
        public readonly string $name,
        public readonly ?string $description,
        public readonly ?bool $stillActive,
        public readonly ?UploadedFile $logo
    ) {}

    public function toArray()
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'still_active' => $this->stillActive,
            'logo' => $this->logo
        ];
    }
}
