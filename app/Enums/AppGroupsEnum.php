<?php

namespace App\Enums;

enum AppGroupsEnum: string
{
    case PUBLISHERS = 'publishers';
    case PEOPLE = 'people';
    case BANDS = 'bands';
    case ALBUMS = 'albums';
    case EVENTS = 'events';
    case ARTICLES = 'articles';

}
