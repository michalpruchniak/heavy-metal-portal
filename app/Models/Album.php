<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Album extends Model
{
    protected $fillable = [
        'band_id',
        'name',
        'description',
        'release_date',
        'publisher_id',
        'cover'
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
}
