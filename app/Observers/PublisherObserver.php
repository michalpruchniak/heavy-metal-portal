<?php

namespace App\Observers;

use App\Models\Publisher;
use Illuminate\Support\Facades\Cache;

class PublisherObserver
{
    /**
     * Handle the Publisher "created" event.
     */
    public function created(Publisher $publisher): void
    {
        Cache::forget('publishers_all');
    }

    /**
     * Handle the Publisher "updated" event.
     */
    public function updated(Publisher $publisher): void
    {
        Cache::forget('publishers_all');
    }

    /**
     * Handle the Publisher "deleted" event.
     */
    public function deleted(Publisher $publisher): void
    {
        Cache::forget('publishers_all');
    }

    /**
     * Handle the Publisher "restored" event.
     */
    public function restored(Publisher $publisher): void
    {
        Cache::forget('publishers_all');
    }

    /**
     * Handle the Publisher "force deleted" event.
     */
    public function forceDeleted(Publisher $publisher): void
    {
        Cache::forget('publishers_all');
    }
}
