<?php

namespace App\Models;

use App\Casts\ImageUrlCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function people(): BelongsToMany
    {
        return $this->belongsToMany(Person::class);
    }
}
