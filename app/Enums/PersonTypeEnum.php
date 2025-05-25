<?php
namespace App\Enums;

enum PersonTypeEnum: string
{
    case ARTIS = 'artist';
    case STAFF = 'staff';
    case NONE = 'none';
}