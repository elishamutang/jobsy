<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class GenerateJobSlugsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = Job::all();

        foreach ($jobs as $job) {
            try {
                $job->generateSlug();
                $job->save();
                Log::info("Generated slug '{$job->slug}' for job {$job->id}");
            } catch (\Exception $e) {
                Log::error("Failed to generate slug for job {$job->id}: ".$e->getMessage());
            }
        }

        Log::info('Job slugs generation complete.');
    }
}
