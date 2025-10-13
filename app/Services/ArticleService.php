<?php

namespace App\Services;

use App\DTO\ArticleDTO;
use App\Models\Article;
use App\Repositories\Interfaces\ArticleRepositoryInterface;
use App\Services\Interfaces\ArticleServiceInerface;
use App\Services\Interfaces\FileUploadServiceInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class ArticleService implements ArticleServiceInerface
{
    const ARTICLE_CATALOG_COVER_DIRECTORY = 'article/cover';

    public function __construct(
        private readonly FileUploadServiceInterface $fileUploadService,
        private readonly ArticleRepositoryInterface $articleRepository
    ) {}

    public function getAll(?array $order = ['created_at' => 'desc'], ?int $paginate = null, ?int $limit = null): Collection|LengthAwarePaginator
    {
        return $this->articleRepository->get(order: $order, paginate: $paginate);
    }

    public function create(ArticleDTO $articleDTO): Article
    {
        $articleData = $articleDTO->toArray();
        $articleData['cover'] = $this->fileUploadService->saveOrUpdatePhoto(null, $articleDTO->cover, self::ARTICLE_CATALOG_COVER_DIRECTORY);
        $article = $this->articleRepository->create($articleData);

        return $article;
    }

    public function update(int $id, ArticleDTO $articleDTO): Article
    {
        $article = $this->articleRepository->findOrFail($id);
        $articleData = $articleDTO->toArray();
        $articleData['cover'] = $this->fileUploadService->saveOrUpdatePhoto($article->getRawOriginal('cover'), $articleDTO->cover, self::ARTICLE_CATALOG_COVER_DIRECTORY);

        $article->update($articleData);

        return $article;
    }

    public function getLatest5Articles(): Collection
    {
        return $this->articleRepository->get(order: ['created_at' => 'asc'], limit: 5);
    }
}
