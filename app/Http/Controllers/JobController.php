<?php

namespace App\Http\Controllers;

use App\Enums\JobLocationType;
use App\Enums\JobStatus;
use App\Enums\JobType;
use App\Models\Country;
use App\Models\Job;
use App\Models\JobLevel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class JobController extends Controller
{
    // Return all jobs belonging to the currently authenticated user.
    public function index()
    {
        // Get currently authenticated user and associated jobs.
        $user = Auth::user();
        $jobs = $user->jobs()->with('country')->latest()->paginate(10);

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
            'job' => $job->load(['country', 'level']),
        ])->with('jobId', $job->id);
    }

    // Render job creation page
    public function create()
    {
        // Get all countries
        $countries = Country::all()->toArray();

        // Get all levels
        $jobLevels = JobLevel::all()->toArray();

        // Sort country names in alphabetically.
        usort($countries, function ($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return Inertia::render('Jobs/Create', [
            'countries' => $countries,
            'jobLevels' => $jobLevels,
        ]);
    }

    // Store new job
    public function store(Request $request)
    {
        // Validate
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'industry' => ['required', 'string', 'max:255'],
            'location' => ['required', 'integer', 'max:255'],
            'location_type' => ['max:255', Rule::enum(JobLocationType::class)],
            'status' => ['required', 'max:255', Rule::enum(JobStatus::class)],
            'date_applied' => ['required', 'date'],
            'closing_date' => ['required', 'date', 'after_or_equal:dateApplied'],
            'type' => ['required', Rule::enum(JobType::class)],
            'job_level' => ['required', 'integer'],
        ]);

        // Create job through the currently authenticated user
        $user = $request->user();
        $job = $user->jobs()->create($validated);

        return to_route('jobs.show', [
            'job' => $job->load('country'),
        ])->with('success', 'Job created!');
    }

    // Render edit page
    public function edit(Job $job)
    {
        // Get all countries
        $countries = Country::all()->toArray();

        // Get all levels
        $jobLevels = JobLevel::all()->toArray();

        // Sort country names in alphabetically.
        usort($countries, function ($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return Inertia::render('Jobs/Edit', [
            'job' => $job->load(['country', 'level']),
            'countries' => $countries,
            'jobLevels' => $jobLevels,
        ])->with('jobId', $job->id);
    }

    // Store updated job
    public function update(Request $request, Job $job)
    {
        // Validate
        $validated = $request->validate([
            'title' => ['string', 'max:255'],
            'company' => ['string', 'max:255'],
            'industry' => ['string', 'max:255'],
            'location' => ['integer'],
            'locationType' => ['string', Rule::enum(JobLocationType::class)],
            'status' => ['string', Rule::enum(JobStatus::class)],
            'dateApplied' => ['date'],
            'closingDate' => ['date', 'after_or_equal:dateApplied'],
            'type' => ['string', Rule::enum(JobType::class)],
            'job_level' => ['integer'],
        ]);

        // Update job
        $job->update($validated);

        return to_route('jobs.show', $job)->with('success', 'Job updated!');
    }

    // Delete job
    public function destroy(Job $job)
    {
        // Get current authenticated user
        $user = Auth::user();

        // Confirm job created by user
        $job = $user->jobs()->findOrFail($job->id);
        $job->delete();

        return to_route('home')->with('success', 'Job deleted!');
    }
}
