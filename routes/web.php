<?php

use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;

// Route::get('/login', function () {
//     return inertia('Login');
// });

// Authenticated Home Page
Route::get('/', [JobController::class, 'index']);

// Show job
Route::prefix('jobs', function () {
    Route::get('/{job}', [JobController::class, 'show']);
});
