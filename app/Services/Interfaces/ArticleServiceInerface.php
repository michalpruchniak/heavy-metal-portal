<?php

namespace App\Services\Interfaces;

use App\DTO\ArticleDTO;
use App\Models\Article;
use Illuminate\Support\Collection;

interface ArticleServiceInerface
{
    const ARTICLE_CATALOG_COVER_DIRECTORY = 'article/cover';

    public function getAll(array $order = ['created_at' => 'desc']): Collection;

    public function create(ArticleDTO $articleDTO): Article;

    public function update(int $id, ArticleDTO $articleDTO): Article;
}
