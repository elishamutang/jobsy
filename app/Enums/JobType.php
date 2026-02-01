<?php

namespace App\Enums;

enum JobType: string
{
    case FULL_TIME = 'Full-time';
    case PART_TIME = 'Part-time';
    case CASUAL = 'Casual';
    case CONTRACTOR = 'Contractor';
}
