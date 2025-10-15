<?php

namespace App\Enums;

use App\Traits\EnumHelper;

enum PersonTypeEnum: string
{
    use EnumHelper;

    case ARTIST = 'artist';
    case STAFF = 'staff';
    case NONE = 'none';
}
