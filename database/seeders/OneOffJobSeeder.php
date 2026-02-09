<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OneOffJobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure user already exists in DB.
        $user = User::findOrFail(5);

        // Check if has existing records, delete if have existing.
        $jobsCount = $user->jobs()->count();

        if ($jobsCount > 0) {
            $user->jobs()->delete();
        }

        Job::factory(15)->for($user)->create();
    }
}
