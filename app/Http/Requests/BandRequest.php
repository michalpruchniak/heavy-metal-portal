<?php

namespace App\Http\Requests;

use App\DTO\BandDTO;
use App\Rules\AllExists;
use App\Rules\MaxLengthWithoutHTMLRule;
use Illuminate\Foundation\Http\FormRequest;

class BandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|between:2,60',
            'description' => ['nullable', 'string', new MaxLengthWithoutHTMLRule(2500)],
            'logo' => 'nullable|image|max:1500|image|mimes:jpg,jpeg,png,webp',
            'still_active' => 'nullable|boolean',
            'people' => ['nullable', 'array', new AllExists('people')],
        ];
    }

    public function getDTO(): BandDTO
    {
        return new BandDTO(
            name: $this->validated('name'),
            description: $this->validated('description'),
            logo: $this->validated('logo'),
            stillActive: $this->validated('still_active'),
            people: $this->validated('people'),
        );
    }
}
