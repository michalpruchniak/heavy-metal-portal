<?php
namespace App\Services\Interfaces;

use App\DTO\ArticleDTO;
use App\Models\Article;

interface ArticleServiceInerface {
    const BAND_CATALOG_PHOTO_DIRECTORY = 'article/cover';

    public function create(ArticleDTO $articleDTO): Article;

}