<?php

namespace App\Providers;

use App\Models\Article;
use App\Models\Band;
use App\Models\Event;
use App\Models\Person;
use App\Models\Publisher;
use App\Observers\ArticleObserver;
use App\Observers\BandObserver;
use App\Observers\EventObserver;
use App\Observers\PersonObserver;
use App\Observers\PublisherObserver;
use Illuminate\Support\ServiceProvider;

class ObserverProvider extends ServiceProvider
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
        Publisher::observe(PublisherObserver::class);
        Event::observe(EventObserver::class);
        Person::observe(PersonObserver::class);
        Article::observe(ArticleObserver::class);
        Band::observe(BandObserver::class);
    }
}
