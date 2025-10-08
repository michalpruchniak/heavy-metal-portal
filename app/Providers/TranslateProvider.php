<?php

namespace App\Providers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class TranslateProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
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
