<?php
namespace App\DTO;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class PublisherDTO implements Arrayable
{
    public function __construct(
        public readonly string $name,
        public readonly ?string $url,
        public readonly ?string $description,
        public readonly ?UploadedFile $logo,
    )
    {
    }

    public function toArray()
    {
        return[
            'name' => $this->name,
            'url' => $this->url,
            'description' => $this->description,
            'logo' => $this->logo,
        ];
    }
}