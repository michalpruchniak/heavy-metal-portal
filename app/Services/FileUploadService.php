<?php

namespace App\Services;

use App\Services\Interfaces\FileUploadServiceInterface;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use RuntimeException;

class FileUploadService implements FileUploadServiceInterface
{
    public function upload(UploadedFile $file, string $folder): false|string
    {
        $path = $file->storeAs($folder, $file->hashName(), 'public');

        if (! $path) {
            throw new RuntimeException("Nie udało się przesłać pliku do folderu: {$folder}");
        }

        return $path;
    }

    public function delete(?string $filePath): void
    {
        if (! $filePath || str_starts_with($filePath, '/tmp/')) {
            return;
        }

        if (Storage::disk('public')->exists($filePath)) {
            if (! Storage::disk('public')->delete($filePath)) {
                Log::warning("Nie udało się usunąć pliku: {$filePath}");
            }
        }
    }

    public function saveOrUpdatePhoto(?string $currentPath, ?UploadedFile $newFile, string $directory): ?string
    {
        if ($newFile) {
            if ($currentPath && Storage::exists($currentPath)) {
                Storage::delete($currentPath);
            }

            return $newFile->store($directory, 'public');
        }

        return $currentPath;
    }
}
