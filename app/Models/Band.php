<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Band extends Model
{
    use HasSlug, Searchable;

    protected $fillable = [
        'name',
        'description',
        'logo',
        'still_active',
    ];

    protected $casts = [
        'logo' => ImageUrlCast::class,
    ];

    public function people(): BelongsToMany
    {
        return $this->belongsToMany(Person::class);
    }

    public function albums(): HasMany
    {
        return $this->hasMany(Album::class)->orderBy('release_date');
    }

    public function toSearchableArray(): array
    {
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
