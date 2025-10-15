<?php

namespace App\Http\Requests;

use App\DTO\PersonDTO;
use App\Enums\PersonTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PersonRequest extends FormRequest
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
            'name' => 'required|string|between:2,100',
            'aka' => 'nullable|string|between:2,150',
            'bio' => 'nullable|string|between:50,2000',
            'DOB' => 'nullable|date',
            'img' => 'nullable|image|max:1500|image|mimes:jpg,jpeg,png,webp',
            'type' => ['required', 'string', Rule::in(PersonTypeEnum::values())],
        ];
    }

    public function getDTO(): PersonDTO
    {
        return new PersonDTO(
            name: $this->validated('name'),
            aka: $this->validated('aka'),
            bio: $this->validated('bio'),
            DOB: $this->validated('DOB'),
            img: $this->validated('img'),
            type: PersonTypeEnum::from($this->validated('type')),
        );
    }
}
