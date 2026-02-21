<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AuthController extends Controller
{
    // Index
    public function index()
    {
        return Inertia::render('Login');
    }

    // Login method
    public function login(Request $request)
    {
        $userCreds = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($userCreds)) {
            $request->session()->regenerate();

            return to_route('home');
        }

        return back()->withErrors([
            'email' => 'User does not match our records.',
        ])->onlyInput('email');
    }

    // Logout method
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return to_route('index');
    }

    // Show registration page
    public function register()
    {
        // Get all countries
        $countries = Country::all()->toArray();

        // Sort country names in alphabetically.
        usort($countries, function ($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return Inertia::render('Register', [
            'countries' => $countries,
        ]);
    }

    // Store new user
    public function store(Request $request)
    {
        $userCreds = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'confirmed', Password::min(6), 'max:255'],
            'country_id' => ['required', 'exists:countries,id'],
        ]);

        // Create user in DB
        $user = User::create($userCreds);

        event(new Registered($user));

        // Authenticate user
        Auth::login($user);
        $request->session()->regenerate();

        return to_route('verification.notice');
    }
}
