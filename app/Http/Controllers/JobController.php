<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Job;
use Inertia\Inertia;
use Illuminate\Http\Client\Request;

class JobController extends Controller
{
    // Return all jobs
    public function index()
    {
        $jobs = Job::paginate(10);

        // Modify the "Previous" and "Next" button text
        $paginatedData = $jobs->toArray();

        $lastIdx = count($paginatedData['links']) - 1;

        $paginatedData['links'][0]['label'] = 'Previous';
        $paginatedData['links'][$lastIdx]['label'] = 'Next';

        // Get all jobs
        return Inertia::render('Home', [
            'jobs' => $paginatedData,
        ]);
    }

    // Return a specific job
    public function show(Job $job)
    {
        return Inertia::render('Jobs/Show', [
            'job' => $job,
        ]);
    }

    // Render job creation page
    public function create()
    {
        // Get all countries
        $countries = Country::all()->toArray();

        // Sort country names in alphabetically.
        usort($countries, function ($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return Inertia::render('Jobs/Create', [
            'countries' => $countries,
        ]);
    }

    // Store new job
    public function store(Request $request)
    {
        // Validate
        $validated = $request->validate([
            'title' => ['required', 'max:255'],
            'company' => ['required', 'max:255'],
            'industry' => ['required', 'max:255'],
            'location' => ['required', 'max:255'],
            'locationType' => ['max:255'],
            'status' => ['required', 'max:255'],
            'dateApplied' => ['required', 'date'],
            'closingDate' => ['required', 'date', 'after_or_equal:dateApplied']
        ]);
    }
}
