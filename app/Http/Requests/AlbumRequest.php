<?php

namespace App\Http\Requests;

use App\DTO\AlbumDTO;
use Illuminate\Foundation\Http\FormRequest;

class AlbumRequest extends FormRequest
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
            'band_id' => 'required|exists:bands,id',
            'name' => 'required|string|between:1,250',
            'description' => 'nullable|string:between:3,2500',
            'release_date' => 'nullable|date',
            'cover' => 'nullable|image|max:1500|image|mimes:jpg,jpeg,png,webp'
        ];
    }

    public function getDTO(): AlbumDTO
    {
        return new AlbumDTO(
            bandId: $this->validated('band_id'),
            name: $this->validated('name'),
            description: $this->validated('description'),
            releaseDate: $this->validated('release_date'),
            cover: $this->validated('cover'),
        );
    }
}
