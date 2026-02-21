<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class FeedbackMessage extends Model
{
    protected $table = 'feedback_messages';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'visitor_name',
        'visitor_email',
        'visitor_message',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_feedback', 'feedback_id', 'user_id');
    }
}
