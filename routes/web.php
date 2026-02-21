<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckEmailVerified;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Authenticated Home Page
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('index')->middleware('guest');

// User Registration
Route::get('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'store']);

// Email verification
Route::prefix('email')->middleware(CheckEmailVerified::class)->group(function () {
    Route::get('/verify/{id}/{hash}', [EmailVerificationController::class, 'verifyEmail'])->middleware(['auth', 'signed'])->name('verification.verify');
    Route::get('/verify', [EmailVerificationController::class, 'index'])->middleware('auth')->name('verification.notice');
    Route::post('/verification-notification', [EmailVerificationController::class, 'resendEmailVerification'])->middleware(['auth', 'throttle:6,1'])->name('verification.send');
});

// User Login & Logout
Route::get('/login', [AuthController::class, 'index'])->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->middleware('guest');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');

// Protected routes
Route::prefix('jobs')->middleware(['auth', 'verified'])->group(function () {

    // Jobs
    Route::get('/edit/{job}', [JobController::class, 'edit']);
    Route::put('/edit/{job}', [JobController::class, 'update']);
    Route::get('/create', [JobController::class, 'create']);
    Route::post('/create', [JobController::class, 'store']);
    Route::delete('/{job}', [JobController::class, 'destroy']);
    Route::get('/{job}', [JobController::class, 'show'])->name('jobs.show');

    // Authenticated home page
    Route::get('/', [JobController::class, 'index'])->name('home');
});

// User profile (protected)
Route::prefix('profile')->middleware(['auth', 'verified'])->group(function () {
    Route::delete('/', [ProfileController::class, 'destroy']);
    Route::put('/', [ProfileController::class, 'update']);
    Route::get('/', [ProfileController::class, 'index']);
});

// Contact form (protected)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/contact', [ContactFormController::class, 'index']);
});
