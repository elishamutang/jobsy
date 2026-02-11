<?php

namespace App\Models;

use App\Enums\JobLocationType;
use App\Enums\JobStatus;
use App\Enums\JobType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Job extends Model
{
    use HasFactory;

    protected $table = 'user_jobs';

    protected $fillable = [
        'title',
        'type',
        'company',
        'date_applied',
        'closing_date',
        'industry',
        'location_type',
        'status',
        'location',
    ];

    protected function casts(): array
    {
        return [
            'date_applied' => 'datetime:Y-m-d',
            'closing_date' => 'datetime:Y-m-d',
            'created_at' => 'datetime:Y-m-d',
            'updated_at' => 'datetime:Y-m-d',
            'type' => JobType::class,
            'status' => JobStatus::class,
            'location_type' => JobLocationType::class,
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'location', 'id');
    }

    public function level(): HasOne
    {
        return $this->hasOne(JobLevel::class, 'id', 'job_level');
    }
}
