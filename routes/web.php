<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;

// Authentication routes
Route::get('/register', [AuthController::class, 'register']);
Route::get('/login', [AuthController::class, 'index']);
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');


// Show job
Route::prefix('jobs')->group(function () {
    Route::get('/create', [JobController::class, 'create']);
    Route::post('/create', [JobController::class, 'store']);
    Route::get('/{job}', [JobController::class, 'show']);
});

// Authenticated Home Page
Route::get('/', [JobController::class, 'index']);
