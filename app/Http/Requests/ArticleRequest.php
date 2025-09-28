<?php

namespace App\Http\Requests;

use App\DTO\ArticleDTO;
use App\Rules\MaxLengthWithoutHTMLRule;
use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
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
            'title' => 'required|string|between:2,250',
            'content' => ['required', 'string', new MaxLengthWithoutHTMLRule(10000)],
            'cover' => 'nullable|max:1500|image|mimes:jpg,jpeg,png,webp'
        ];
    }

    public function getDTO(): ArticleDTO
    {
        return new ArticleDTO(
            title: $this->validated('title'),
            content: $this->validated('content'),
            cover: $this->validated('cover')
        );
    }
}
