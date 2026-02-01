<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Password;

class ProfileController extends Controller
{
    // Show profile page
    public function index()
    {
        return Inertia::render('Profile', [
            'user' => Auth::user(),
        ]);
    }

    // Update user profile
    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => ['string', 'max:255'],
            'email' => ['required', 'email', Rule::unique('users')->ignore(Auth::user()->id)],
            'password' => ['nullable', 'confirmed', Password::min(6), 'max:255']
        ]);

        // Handle password separately to avoid hashing empty values
        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($request->password);
        }

        // Update authenticated user
        $user = Auth::user();
        $user->update($validated);

        return to_route('Home')->with('success', 'Profile updated');
    }

    // Delete user profile
}
