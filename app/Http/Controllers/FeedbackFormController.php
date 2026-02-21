<?php

namespace App\Http\Controllers;

use App\Mail\UserFeedbackMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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
        Mail::to('elishamutang@outlook.com')->send(new UserFeedbackMail(Auth::user(), $validated));

        return to_route('home')->with('success', 'Message sent!');
    }
}
