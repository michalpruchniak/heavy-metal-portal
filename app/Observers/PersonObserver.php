<?php

namespace App\Observers;

use App\Models\Person;
use Illuminate\Support\Facades\Cache;

class PersonObserver
{
    /**
     * Handle the Person "created" event.
     */
    public function created(Person $person): void
    {
        Cache::forget('people_all');

    }

    /**
     * Handle the Person "updated" event.
     */
    public function updated(Person $person): void
    {
        Cache::forget('people_all');

    }

    /**
     * Handle the Person "deleted" event.
     */
    public function deleted(Person $person): void
    {
        Cache::forget('people_all');
    }

    /**
     * Handle the Person "restored" event.
     */
    public function restored(Person $person): void
    {
        //
    }

    /**
     * Handle the Person "force deleted" event.
     */
    public function forceDeleted(Person $person): void
    {
        //
    }
}
