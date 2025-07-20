<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;

class Band extends Model
{
    protected $fillable = [
        'name',
        'description',
        'logo',
        'still_active'
    ];

    protected $casts = [
        'logo' => ImageUrlCast::class,
    ];
}
