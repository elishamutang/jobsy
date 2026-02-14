<?php

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
        Schema::create('job_salary_ranges', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_id');
            $table->foreign('job_id')->references('id')->on('user_jobs')->cascadeOnDelete();
            $table->string('min_based_on_user_country');
            $table->string('max_based_on_user_country');
            $table->string('min_based_on_job_country');
            $table->string('max_based_on_job_country');
            $table->boolean('is_company_specific');
            $table->json('sources')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_salary_ranges');
    }
};
