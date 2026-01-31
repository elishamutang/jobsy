<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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

    // Delete user profile
}
