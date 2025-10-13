<?php

namespace App\Services\Interfaces;

use App\DTO\ArticleDTO;
use App\Models\Article;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface ArticleServiceInerface
{
    public function getAll(?array $order = ['created_at' => 'desc'], ?int $paginate = null, ?int $limit = null): Collection|LengthAwarePaginator;

    public function create(ArticleDTO $articleDTO): Article;

    public function update(int $id, ArticleDTO $articleDTO): Article;
}
