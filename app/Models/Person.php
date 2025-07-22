<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Person extends Model
{
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
}
