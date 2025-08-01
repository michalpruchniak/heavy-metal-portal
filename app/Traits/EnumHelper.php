<?php

namespace App\Traits;

trait EnumHelper
{
    public static function values(): array
    {
        return array_map(fn ($case) => $case->value, self::cases());
    }

    public static function random(): static
    {
        $cases = self::cases();

        return $cases[array_rand($cases)];
    }
}
