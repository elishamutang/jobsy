<?php

namespace Database\Seeders;

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
        User::factory()->create([
            'name' => 'Elisha',
            'email' => 'elishamutang@outlook.com',
            'password' => 1234,
        ]);

        // Run additional seeders
        $this->call([
            CountrySeeder::class,
            JobLevelSeeder::class,
            JobSeeder::class,
        ]);
    }
}
