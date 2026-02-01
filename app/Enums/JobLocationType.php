<?php

namespace App\Enums;

enum JobLocationType: string
{
    case ON_SITE = 'On-site';
    case HYBRID = 'Hybrid';
    case REMOTE = 'Remote';
}
