<?php

namespace App\Services;

use App\DTO\ArticleDTO;
use App\Models\Article;
use App\Repositories\Interfaces\ArticleRepositoryInterface;
use App\Services\Interfaces\ArticleServiceInerface;
use App\Services\Interfaces\FileUploadServiceInterface;

class ArticleService implements ArticleServiceInerface {
    const ARTICLE_CATALOG_COVER_DIRECTORY = 'article/cover';

    public function __construct(
        private readonly FileUploadServiceInterface $fileUploadService,
        private readonly ArticleRepositoryInterface $articleRepository
        )
    {}

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
}

