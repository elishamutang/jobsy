<?php

namespace Tests\Feature\Jobs;

use App\Models\Job;
use App\Models\User;
use Database\Seeders\CountrySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class JobControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Unverified users cannot access the main homepage.
     */
    public function test_unverified_users_cannot_access_the_main_homepage(): void
    {
        // Arrange data
        $user = User::factory()->create([
            'email_verified_at' => null,
        ]);

        // Act
        $this->actingAs($user);
        $response = $this->get('/jobs');

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect('/email/verify');
    }

    /**
     * Verified and authenticated users can access the main homepage.
     */
    public function test_verified_and_authenticated_users_can_access_main_homepage(): void
    {
        // Arrange data
        $user = User::factory()->create();

        // Act
        $this->actingAs($user);
        $response = $this->get('/jobs');

        // Assert
        $response->assertStatus(200);
    }

    /**
     * Verified and authenticated users can create new job
     */
    public function test_verified_and_authenticated_users_can_create_new_job(): void
    {
        // Arrange data
        $user = User::factory()->create();
        $this->seed(CountrySeeder::class);

        $jobDetails = [
            'title' => 'Fake job',
            'company' => 'Fake company',
            'industry' => 'Fake industry',
            'location' => '6',
            'location_type' => 'Hybrid',
            'status' => 'Pending',
            'date_applied' => '07/02/2026',
            'closing_date' => '08/02/2026',
            'type' => 'Full-time',
        ];

        // Act
        $this->actingAs($user);
        $response = $this->post('/jobs/create', $jobDetails);

        // Assert
        $response->assertStatus(302);
        $response->assertSessionHas([
            'success' => 'Job created!',
        ]);
    }

    /**
     * Verified and authenticated users can edit their own jobs.
     */
    public function test_verified_and_authenticated_users_can_update_their_own_jobs(): void
    {
        // Arrange
        $user = User::factory()->create();
        $this->seed(CountrySeeder::class);

        $job = Job::factory()->create([
            'title' => 'Fake job',
            'user_id' => $user->id,
        ]);

        $jobId = $job->id;

        // Act
        $this->actingAs($user);
        $response = $this->put("/jobs/edit/$jobId", [
            'title' => 'Real job',
        ]);

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect("/jobs/$jobId");

        $this->assertDatabaseHas('user_jobs', [
            'title' => 'Real job',
        ]);
    }
}
