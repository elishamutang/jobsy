<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
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
Route::prefix('email')->group(function () {
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
    Route::get('/create', [JobController::class, 'create']);
    Route::post('/create', [JobController::class, 'store']);
    Route::get('/{job}', [JobController::class, 'show']);

    // Authenticated home page
    Route::get('/', [JobController::class, 'index'])->name('home');
});

// User profile
Route::prefix('profile')->group(function () {
    Route::post('/', [ProfileController::class, 'update']);
    Route::get('/', [ProfileController::class, 'index']);
})->middleware(['auth', 'verified']);
