<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    // Render email verification notice
    public function index()
    {
        return Inertia::render('Email/Verification');
    }

    // Verify email
    public function verifyEmail(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return to_route('home');
    }

    // Re-send email verification email
    public function resendEmailVerification(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('message', 'Verification link sent!');
    }
}
