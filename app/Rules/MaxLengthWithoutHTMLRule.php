<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class MaxLengthWithoutHTMLRule implements ValidationRule
{
    private $max;

    public function __construct(int $max)
    {
        $this->max = $max;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $plain = Str::of(strip_tags($value))->trim();

        if(mb_strlen($plain) > $this->max) {
            $fail("The {$attribute} field may not be greater than {$this->max} characters.");
            return;

        }
    }
}
