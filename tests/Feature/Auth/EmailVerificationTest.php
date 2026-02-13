<?php

namespace Tests\Feature\Auth;

use Database\Seeders\CountrySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmailVerificationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Render email verification notice after successful registration.
     */
    public function test_redirect_user_to_email_verification_page_if_email_is_unverified(): void
    {
        $this->seed(CountrySeeder::class);

        // Arrange data
        $user = [
            'name' => 'Example User',
            'email' => 'user@example.com',
            'country' => 6,
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        // Act
        $response = $this->post('/register', $user);

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect('/email/verify');
    }
}
