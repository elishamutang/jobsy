<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobSalaryRange extends Model
{
    protected $fillable = [
        'job_id',
        'min_based_on_job_country',
        'max_based_on_job_country',
        'is_company_specific',
        'sources',
    ];

    protected function casts(): array
    {
        return [
            'is_company_specific' => 'boolean',
            'sources' => 'array',
        ];
    }

    public function job(): BelongsTo
    {
        return $this->belongsTo(Job::class, 'job_id', 'id');
    }
}
