<?php

use App\Enums\PermissionEnum;

return [
    'global' => [
        PermissionEnum::PUBLISHERS_INDEX->value,
        PermissionEnum::PEOPLE_INDEX->value,
        PermissionEnum::BANDS_INDEX->value,
        PermissionEnum::ALBUMS_INDEX->value,
        PermissionEnum::EVENTS_INDEX->value,
        PermissionEnum::ARTICLES_INDEX->value,
    ],
    'resources' => [
        'publishers' => [
            PermissionEnum::PUBLISHERS_INDEX->value,
            PermissionEnum::PUBLISHERS_CREATE->value,
            PermissionEnum::PUBLISHERS_EDIT->value,
        ],
        'people' => [
            PermissionEnum::PEOPLE_INDEX->value,
            PermissionEnum::PEOPLE_CREATE->value,
            PermissionEnum::PEOPLE_EDIT->value,
        ],
        'albums' => [
            PermissionEnum::ALBUMS_INDEX->value,
            PermissionEnum::ALBUMS_CREATE->value,
            PermissionEnum::ALBUMS_EDIT->value,
            PermissionEnum::BANDS_INDEX->value,
        ],
        'bands' => [
            PermissionEnum::BANDS_INDEX->value,
            PermissionEnum::BANDS_CREATE->value,
            PermissionEnum::BANDS_EDIT->value,
            PermissionEnum::ALBUMS_INDEX->value,
        ],
        'events' => [
            PermissionEnum::EVENTS_INDEX->value,
            PermissionEnum::EVENTS_CREATE->value,
            PermissionEnum::EVENTS_EDIT->value,
        ],
        'articles' => [
            PermissionEnum::ARTICLES_INDEX->value,
            PermissionEnum::ARTICLES_CREATE->value,
            PermissionEnum::ARTICLES_EDIT->value,
        ],
    ],
];
