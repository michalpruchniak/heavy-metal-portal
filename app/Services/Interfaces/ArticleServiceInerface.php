<?php

namespace App\Services\Interfaces;

use App\DTO\ArticleDTO;
use App\Models\Article;
use Illuminate\Support\Collection;

interface ArticleServiceInerface
{
    public function getAll(array $order = ['created_at' => 'desc'], $limit = null): Collection;

    public function create(ArticleDTO $articleDTO): Article;

    public function update(int $id, ArticleDTO $articleDTO): Article;
}
