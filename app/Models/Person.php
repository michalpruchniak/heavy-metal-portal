<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Searchable;

class Person extends Model
{
    use Searchable;

    protected $fillable = [
        'name',
        'aka',
        'bio',
        'DOB',
        'img',
        'type',
    ];

    protected $casts = [
        'img' => ImageUrlCast::class,
    ];

    public function people(): BelongsToMany
    {
        return $this->belongsToMany(Person::class);
    }

    public function toSearchableArray()
    {
        $this->loadMissing('band');

        return [
            'name' => $this->name,
            'band_name' => $this->band?->name,
        ];
    }
}
