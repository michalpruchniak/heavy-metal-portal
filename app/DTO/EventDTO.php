<?php

namespace App\DTO;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class EventDTO implements Arrayable
{
    public function __construct(
        public readonly string $name,
        public readonly string $description,
        public readonly string $date,
        public readonly ?UploadedFile $cover
    ) {}

    public function toArray()
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'date' => $this->date,
            'cover' => $this->cover,
        ];
    }
}
