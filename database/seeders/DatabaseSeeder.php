<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory([
            'name' => 'Elisha',
            'email' => 'elishamutang@outlook.com',
            'password' => 1234,
        ]);

        Job::factory(20)->for($user)->create();
    }
}
