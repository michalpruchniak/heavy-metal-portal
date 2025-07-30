<?php

namespace App\Providers;

use App\Models\Publisher;
use App\Observers\PublisherObserver;
use App\Repositories\AlbumRepository;
use App\Repositories\BandRepository;
use App\Repositories\Interfaces\AlbumRepositoryInterface;
use App\Repositories\Interfaces\BandRepositoryInterface;
use App\Repositories\Interfaces\PersonRepositoryInterface;
use App\Repositories\Interfaces\PublisherRepositoryInterface;
use App\Repositories\PersonRepository;
use App\Repositories\PublisherRepository;
use App\Services\AlbumService;
use App\Services\BandService;
use App\Services\FileUploadService;
use App\Services\Interfaces\AlbumServiceInterface;
use App\Services\Interfaces\BandServiceInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PersonServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;
use App\Services\PersonService;
use App\Services\PublisherService;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

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

        $this->app->bind(PersonRepositoryInterface::class, PersonRepository::class);

        $this->app->bind(PersonServiceInterface::class, PersonService::class);

        $this->app->bind(BandServiceInterface::class, BandService::class);

        $this->app->bind(BandRepositoryInterface::class, BandRepository::class);

        $this->app->bind(AlbumServiceInterface::class, AlbumService::class);

        $this->app->bind(AlbumRepositoryInterface::class, AlbumRepository::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Publisher::observe(PublisherObserver::class);

        $this->getTranslate();
    }

    private function getTranslate(): void
    {
        Inertia::share([
            'translations' => function () {
                $files = ['main'];
                $translations = [];

                foreach ($files as $file) {
                    $translations = array_merge($translations, Lang::get($file));
                }

                return $translations;
            },
            'locale' => fn () => App::getLocale(),
        ]);
    }
}
