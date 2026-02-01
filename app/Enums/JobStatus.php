<?php

namespace App\Enums;

enum JobStatus: string
{
    case PENDING = 'Pending';
    case INTERVIEW = 'Interview';
    case OFFER = 'Offer';
    case REJECTED = 'Rejected';
    case GHOSTED = 'Ghosted';
}
