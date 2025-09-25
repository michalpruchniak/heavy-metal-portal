<?php

use App\Enums\PersonTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('aka')->nullable();
            $table->text('bio')->nullable();
            $table->date('DOB')->nullable();
            $table->string('img')->nullable();
            $table->enum('type', PersonTypeEnum::values())->default(PersonTypeEnum::NONE->value);
            $table->string('slug');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
