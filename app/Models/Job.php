<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'location',
        'location_type',
        'current_stage',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'date_applied' => 'datetime',
            'closing_date' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
