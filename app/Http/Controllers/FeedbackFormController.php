<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeedbackFormController extends Controller
{
    // Load contact form page
    public function index()
    {
        return Inertia::render('Feedback');
    }

    // Store visitor message in DB
    public function store(Request $request)
    {
        $validated = $request->validate([
            'visitor_message' => ['required', 'string', 'max:2000'],
        ]);

        // Get current user
        Auth::user()->feedbackMessages()->create($validated);

        // Send email

        return to_route('home')->with('success', 'Message sent!');
    }
}
