<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;

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
        return Inertia::render('Jobs/Create');
    }
}
