<?php

namespace Database\Seeders;

use App\Models\JobLevel;
use Illuminate\Database\Seeder;

class JobLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $levels = [
            'Entry-level',
            'Junior',
            'Mid-level',
            'Lead (Manager/Supervisor)',
            'Senior Management',
            'C-Suite',
        ];

        foreach ($levels as $level) {
            JobLevel::create([
                'title' => $level,
            ]);
        }
    }
}
