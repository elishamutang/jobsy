<?php

namespace Tests\Feature\Profile;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProfileControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Unverified users cannot access profile page.
     */
    public function test_unverified_users_cannot_access_profile_page(): void
    {
        // Arrange
        $user = User::factory()->create([
            'email_verified_at' => null,
        ]);

        // Act
        $this->actingAs($user);
        $response = $this->get('/profile');

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect('/email/verify');
    }

    /**
     * Unauthenticated users cannot access profile page.
     */
    public function test_unauthenticated_users_cannot_access_profile_page(): void
    {
        $response = $this->get('/profile');

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    /**
     * Authenticated users can access profile page.
     */
    public function test_authenticated_users_can_access_profile_page(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $this->actingAs($user);
        $response = $this->get('/profile');

        // Assert
        $response->assertStatus(200);
    }

    /**
     * Authenticated users can update their own profile.
     */
    public function test_authenticated_users_can_update_their_own_profile(): void
    {
        // Arrange
        $user = User::factory()->create([
            'name' => 'Example User',
        ]);

        // Act
        $this->actingAs($user);
        $response = $this->put('/profile', [
            'name' => 'John Doe'
        ]);

        // Assert
        $response->assertStatus(302);
        $response->assertSessionHas([
            'success' => 'Profile updated!',
        ]);

        $this->assertDatabaseHas('users', [
            'name' => 'John Doe',
        ]);
    }

    /**
     * Authenticated users can delete their own profile.
     */
    public function test_authenticated_users_can_delete_their_own_profile(): void
    {
        // Arrange
        $user = User::factory()->create([
            'email' => 'user@example.com',
        ]);

        // Act
        $this->actingAs($user);
        $response = $this->delete('/profile');

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect('/');

        $this->assertDatabaseMissing('users', [
            'email' => $user->email,
        ]);
    }
}
