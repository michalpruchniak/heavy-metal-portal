<?php

namespace App\Http\Requests;

use App\DTO\EventDTO;
use App\Rules\MaxLengthWithoutHTMLRule;
use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
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
            'cover' => 'nullable|image|max:1500|image|mimes:jpg,jpeg,png,webp',
            'date' => 'nullable|date|after_or_equal:2025-10-01',
        ];
    }

    public function getDTO(): EventDTO
    {
        return new EventDTO(
            name: $this->validated('name'),
            description: $this->validated('description'),
            date: $this->validated('date'),
            cover: $this->validated('cover'),
        );
    }
}
