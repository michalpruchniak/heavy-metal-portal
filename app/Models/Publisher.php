<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Publisher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'url',
        'description',
        'logo',
    ];

    protected $casts = [
        'logo' => ImageUrlCast::class,
    ];

    public function albums(): HasMany
    {
        return $this->hasMany(Album::class);
    }
}
