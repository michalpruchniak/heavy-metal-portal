<?php

namespace App\Providers;

use App\Services\AlbumService;
use App\Services\ArticleService;
use App\Services\BandService;
use App\Services\EventService;
use App\Services\FileUploadService;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\ArticleServiceInerface;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\EventServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PersonServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;
use App\Services\PersonService;
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
        $this->app->bind(PublisherServiceInterface::class, PublisherService::class);
        $this->app->bind(PersonServiceInterface::class, PersonService::class);
        $this->app->bind(BandServiceInterface::class, BandService::class);
        $this->app->bind(AlbumServiceInterface::class, AlbumService::class);
        $this->app->bind(EventServiceInterface::class, EventService::class);
        $this->app->bind(ArticleServiceInerface::class, ArticleService::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

    }

}
