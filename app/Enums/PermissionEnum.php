<?php

namespace App\Enums;

enum PermissionEnum: string
{
    case PUBLISHERS_INDEX = 'publishers.index';
    case PUBLISHERS_CREATE = 'publishers.create';
    case PUBLISHERS_EDIT = 'publishers.edit';

    case PEOPLE_INDEX = 'people.index';
    case PEOPLE_CREATE = 'people.create';
    case PEOPLE_EDIT = 'people.edit';

    case BANDS_INDEX = 'bands.index';
    case BANDS_CREATE = 'bands.create';
    case BANDS_EDIT = 'bands.edit';

    case ALBUMS_INDEX = 'albums.index';
    case ALBUMS_CREATE = 'albums.create';
    case ALBUMS_EDIT = 'albums.edit';

    case EVENTS_INDEX = 'events.index';
    case EVENTS_CREATE = 'events.create';
    case EVENTS_EDIT = 'events.edit';

    case ARTICLES_INDEX = 'articles.index';
    case ARTICLES_CREATE = 'articles.create';
    case ARTICLES_EDIT = 'articles.edit';

}