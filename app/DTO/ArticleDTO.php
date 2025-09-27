<?php

namespace App\DTO;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\UploadedFile;

class ArticleDTO implements Arrayable
{
    public function __construct(
        public readonly string $title,
        public readonly string $content,
        public readonly ?UploadedFile $cover
    ) {}

    public function toArray()
    {
        return [
            'title' => $this->title,
            'content' => $this->content,
            'cover' => $this->cover,
        ];
    }
}
