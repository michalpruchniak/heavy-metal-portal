<?php
namespace App\Services\Interfaces;

use App\DTO\ArticleDTO;
use App\Models\Article;

interface ArticleServiceInerface {
    const ARTICLE_CATALOG_COVER_DIRECTORY = 'article/cover';

    public function create(ArticleDTO $articleDTO): Article;

    public function update(int $id, ArticleDTO $articleDTO): Article;
}