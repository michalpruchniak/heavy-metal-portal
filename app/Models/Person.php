<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Searchable;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Person extends Model
{
    use HasFactory, HasSlug, Searchable;

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

    public function bands(): BelongsToMany
    {
        return $this->belongsToMany(Band::class);
    }

    public function toSearchableArray(): array
    {
        $this->loadMissing('bands');

        return [
            'name' => $this->name,
        ];
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
