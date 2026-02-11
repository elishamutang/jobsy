<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class JobLevel extends Model
{
    protected $table = 'job_level';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
    ];

    public function jobs(): BelongsToMany
    {
        return $this->belongsToMany(Job::class);
    }
}
