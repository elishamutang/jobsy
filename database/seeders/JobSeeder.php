<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if has existing records, delete if have existing.
        $jobs = Job::all();

        if (count($jobs) > 0) {
            Job::truncate();
        }

        // Get user
        $user = User::first();

        Job::factory(20)->for($user)->create();
    }
}
