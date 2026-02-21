<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactFormController extends Controller
{
    // Load contact form page
    public function index()
    {
        return Inertia::render('Contact');
    }
}
