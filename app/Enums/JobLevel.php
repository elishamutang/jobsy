<?php

namespace App\Enums;

enum JobLevel: string
{
    case ENTRY_LEVEL = 'Entry-level';
    case JUNIOR = 'Junior';
    case MID_LEVEL = 'Mid-level';
    case SENIOR = 'Senior';
    case LEAD = 'Lead (Manager/Supervisor)';
    case SENIOR_MANAGEMENT = 'Senior Management';
    case EXECUTIVE = 'C-Suite';
}
