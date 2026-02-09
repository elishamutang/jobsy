<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class EmailVerificationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Render email verification notice after successful registration.
     */
    public function test_redirect_user_to_email_verification_page_if_email_is_unverified(): void
    {
        // Arrange data
        $user = [
            'name' => 'Example User',
            'email' => 'user@example.com',
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
