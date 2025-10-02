<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Album extends Model
{
    use HasSlug, Searchable;

    protected $fillable = [
        'band_id',
        'name',
        'description',
        'release_date',
        'publisher_id',
        'cover',
    ];

    protected $casts = [
        'cover' => ImageUrlCast::class,
    ];

    public function band(): BelongsTo
    {
        return $this->belongsTo(Band::class);
    }

    public function publisher(): BelongsTo
    {
        return $this->belongsTo(Publisher::class);
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function toSearchableArray(): array
    {
        $this->loadMissing('band');

        return [
            'name' => $this->name,
            'band_name' => $this->band?->name,
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
