<?php

use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;

// Route::get('/login', function () {
//     return inertia('Login');
// });

// Show job
Route::prefix('jobs')->group(function () {
    Route::get('/create', [JobController::class, 'create']);
    Route::post('/create', [JobController::class, 'store']);
    Route::get('/{job}', [JobController::class, 'show']);
});

// Authenticated Home Page
Route::get('/', [JobController::class, 'index']);
