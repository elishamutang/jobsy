<?php

use Illuminate\Support\Facades\Route;

// Route::get('/login', function () {
//     return inertia('Login');
// });

Route::get('/', function () {
    return inertia('Home');
});
