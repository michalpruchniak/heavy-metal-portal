<?php

namespace App\DTO;

use App\Enums\PersonTypeEnum;
use DateTimeImmutable;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class PersonDTO implements Arrayable
{
    public function __construct(
        public readonly string $name,
        public readonly ?string $aka,
        public readonly ?string $bio,
        public readonly ?DateTimeImmutable $date,
        public readonly ?UploadedFile $img,
        public readonly PersonTypeEnum $type
    ) {}

    public function toArray()
    {
        return [
            'name' => $this->name,
            'aka' => $this->aka,
            'bio' => $this->bio,
            'date' => $this->date,
            'img' => $this->img,
            'type' => $this->type,
        ];
    }
}
