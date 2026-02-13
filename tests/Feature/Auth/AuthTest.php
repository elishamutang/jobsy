<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Database\Seeders\CountrySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * New users can register.
     */
    public function test_users_can_register(): void
    {
        $this->seed(CountrySeeder::class);

        // Arrange data: Prepare user data
        $userData = [
            'name' => 'Example User',
            'email' => 'user@example.com',
            'country' => 6,
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        // Act: Perform POST request
        $response = $this->post('/register', $userData);

        // Assert: Verify the expected results
        $response->assertStatus(302); // Check for redirect
        $this->assertDatabaseHas('users', [ // Verify user is in database
            'email' => $userData['email'],
        ]);
        $this->assertAuthenticated(); // Verif user is logged in.
    }

    /**
     * Cannot register account with an existing or duplicate email.
     */
    public function test_registration_email_must_be_unique(): void
    {
        // Arrange data
        User::factory()->create([
            'name' => 'Example User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
        ]);

        $duplicateUser = [
            'email' => 'user@example.com',
            'password' => 'password1',
        ];

        // Perform POST request
        $response = $this->post('/register', $duplicateUser);

        // Assert
        $response->assertStatus(302);
        $response->assertSessionHasErrors();
    }

    /**
     * Existing users can login.
     */
    public function test_existing_users_can_login(): void
    {
        // Arrange data: Prepare existing user data
        $user = User::factory()->create([
            'name' => 'Example User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
        ]);

        // Act: Perform POST request
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => $user->password,
        ]);

        // Assert: Verify the expected results
        $response->assertStatus(302); // Check for redirect
    }

    /**
     * Unregistered users cannot login.
     */
    public function test_unregistered_users_cannot_login(): void
    {
        $response = $this->post('/login', [
            'email' => 'user@example.com',
            'password' => 'password',
        ]);

        // Verify the expected results
        $response->assertStatus(302);
        $response->assertSessionHasErrors([
            'email' => 'User does not match our records.',
        ]);
    }

    /**
     * Authenticated users can logout
     */
    public function test_authenticated_users_can_logout(): void
    {
        // Arrange data
        $user = User::factory()->create([
            'name' => 'Example User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
        ]);

        // Act
        $this->actingAs($user);
        $response = $this->post('/logout');

        // Assert
        $response->assertStatus(302);
        $this->assertGuest();
    }
}
