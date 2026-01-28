<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Authenticated Home Page
Route::get('/', function () {
    return Inertia::render('Home');
})->name('index')->middleware('guest');

// User Registration
Route::get('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'store']);

// User Login & Logout
Route::get('/login', [AuthController::class, 'index'])->middleware('guest');
Route::post('/login', [AuthController::class, 'login'])->middleware('guest');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');

// To be protected routes
Route::prefix('jobs')->group(function () {
    Route::get('/create', [JobController::class, 'create']);
    Route::post('/create', [JobController::class, 'store']);

    Route::get('/{job}', [JobController::class, 'show']);

    // Authenticated home page
    Route::get('/', [JobController::class, 'index'])->name('home');
});
