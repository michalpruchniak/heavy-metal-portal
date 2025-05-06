<?php

namespace App\Services\Interfaces;

use Illuminate\Http\UploadedFile;

interface FileUploadServiceInterface
{
    public function upload(UploadedFile $file, string $folder): false|string;

    public function delete(?string $filePath): void;

    public function saveOrUpdatePhoto(?string $existingFile, ?UploadedFile $newFile, string $directory): ?string;
}
