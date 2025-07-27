<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;

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
}
