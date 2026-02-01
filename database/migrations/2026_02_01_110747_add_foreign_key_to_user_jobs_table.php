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
        Schema::table('user_jobs', function (Blueprint $table) {
            $table->unsignedBigInteger('location')->change();
            $table->foreign('location')->references('id')->on('countries');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_jobs', function (Blueprint $table) {
            $table->dropForeign('location');
            $table->string('location')->change();
        });
    }
};
