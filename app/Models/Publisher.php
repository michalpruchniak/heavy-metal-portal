<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    protected $fillable = [
        'name',
        'url',
        'description',
        'logo',
    ];

    protected $casts = [
        'logo' => ImageUrlCast::class,
    ];

}
