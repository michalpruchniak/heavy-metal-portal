<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class AllExists implements ValidationRule
{
    public function __construct(
        protected string $table,
        protected string $column = 'id'
    ) {}

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! is_array($value)) {
            $fail("The $attribute must be an array.");

            return;
        }

        $existing = DB::table($this->table)
            ->whereIn($this->column, $value)
            ->pluck($this->column)
            ->all();

        $missing = array_diff($value, $existing);

        if (! empty($missing)) {
            $fail("Some of the provided $attribute values do not exist.");
        }
    }
}
