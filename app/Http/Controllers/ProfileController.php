<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Validation\Rules\Password;

class ProfileController extends Controller
{
    // Show profile page
    public function index()
    {
        return Inertia::render('Profile', [
            'user' => Auth::user(),
            'showLogout' => true,
        ]);
    }

    // Update user profile
    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => ['string', 'max:255'],
            'email' => ['email', Rule::unique('users')->ignore(Auth::user()->id)],
            'password' => ['nullable', 'confirmed', Password::min(6), 'max:255']
        ]);

        // Update authenticated user
        $user = Auth::user();

        // Handle password separately to avoid hashing empty values
        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($request->password);
        } else {
            $validated['password'] = $user->password;
        }

        $user->update($validated);

        return to_route('home')->with('success', 'Profile updated!');
    }

    // Delete user profile
    public function destroy(Request $request)
    {
        // Validate request
        $request->validate(
            [
                'confirm_email' => ['required', 'email', Rule::in([auth()->user()->email])]
            ],
            [
                'confirm_email.in' => 'The email must match your account email.',
            ]
        );

        // Get authenticated user
        $user = Auth::user();

        // Remove session and delete user
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        $user->delete();

        return to_route('index');
    }
}
