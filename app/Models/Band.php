<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Band extends Model
{
    use Searchable;

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
        return $this->hasMany(Album::class);
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name,
        ];
    }
}
