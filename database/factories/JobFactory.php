<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        // Get all countries
        $countries = Country::all();

        return [
            'title' => fake()->jobTitle(),
            'type' => fake()->randomElement(['Full-time', 'Part-time', 'Casual']),
            'company' => fake()->company(),
            'date_applied' => fake()->dateTimeThisYear(),
            'closing_date' => fake()->dateTimeThisYear(),
            'industry' => fake()->randomElement(['Services', 'Agriculture', 'Retail', 'Manufacturing', 'Construction', 'Government', 'Healthcare', 'Commercial Real Estate', 'Mining', 'Engineering', 'Education', 'Construction']),
            'location' => $countries->random()->id,
            'location_type' => fake()->randomElement(['On-site', 'Hybrid', 'Remote']),
            'current_stage' => fake()->randomElement(['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']),
            'status' => fake()->randomElement(['Offer', 'Pending', 'Rejected', 'Ghosted']),
        ];
    }
}
