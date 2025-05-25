<?php
namespace App\Enums;

use App\Traits\EnumHelper;

enum PersonTypeEnum: string
{
    use EnumHelper;

    case ARTIS = 'artist';
    case STAFF = 'staff';
    case NONE = 'none';
}