<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
        'description',
        'date',
        'cover',
    ];

    protected $casts = [
        'cover' => ImageUrlCast::class,
    ];
}
