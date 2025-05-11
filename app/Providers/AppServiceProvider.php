<?php

namespace App\Providers;

use App\Models\Publisher;
use App\Observers\PublisherObserver;
use App\Repositories\Interfaces\PublisherRepositoryInterface;
use App\Repositories\PublisherRepository;
use App\Services\FileUploadService;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\Interfaces\PublisherServiceInterface;
use App\Services\PublisherService;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;

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

