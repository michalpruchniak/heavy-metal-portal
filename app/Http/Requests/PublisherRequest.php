<?php

namespace App\Http\Requests;

use App\DTO\PublisherDTO;
use Illuminate\Foundation\Http\FormRequest;

class PublisherRequest extends FormRequest
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
            'name' => 'required|string|between:1,200',
            'logo' => 'required|image|max:500',
            'url' => 'nullable|url',
            'description' => 'nullable|string|between:20,2500',
        ];
    }

    public function getDTO(): PublisherDTO
    {
        return new PublisherDTO(
            name: $this->validated('name'),
            logo: $this->validated('logo'),
            url: $this->validated('url'),
            description: $this->validated('description')
        );
    }
}
