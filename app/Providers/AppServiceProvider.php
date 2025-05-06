<?php

namespace App\Providers;

use App\Repositories\Interfaces\PublisherRepositoryInterface;
use App\Repositories\PublisherRepository;
use App\Services\FileUploadService;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;
use App\Services\PublisherService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(FileUploadServiceInterface::class, FileUploadService::class);

        $this->app->bind(PublisherRepositoryInterface::class, PublisherRepository::class);

        $this->app->bind(PublisherServiceInterface::class, PublisherService::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
