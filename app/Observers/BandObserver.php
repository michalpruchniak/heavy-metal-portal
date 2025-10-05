<?php

namespace App\Observers;

use App\Models\Band;
use Illuminate\Support\Facades\Cache;

class BandObserver
{
    /**
     * Handle the Band "created" event.
     */
    public function created(Band $band): void
    {
        Cache::forget('bands_all');

    }

    /**
     * Handle the Band "updated" event.
     */
    public function updated(Band $band): void
    {
        Cache::forget('bands_all');

    }

    /**
     * Handle the Band "deleted" event.
     */
    public function deleted(Band $band): void
    {
        Cache::forget('bands_all');

    }

    /**
     * Handle the Band "restored" event.
     */
    public function restored(Band $band): void
    {
        //
    }

    /**
     * Handle the Band "force deleted" event.
     */
    public function forceDeleted(Band $band): void
    {
        //
    }
}
