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
        Schema::table('job_salary_ranges', function (Blueprint $table) {
            $table->dropColumn(['min_based_on_user_country', 'max_based_on_user_country']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_salary_ranges', function (Blueprint $table) {
            $table->string('min_based_on_user_country');
            $table->string('max_based_on_user_country');
        });
    }
};
