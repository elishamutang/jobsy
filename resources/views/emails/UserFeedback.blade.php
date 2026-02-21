@component('mail::layout')
{{-- Message --}}
@component('mail::message')
        
# Sent by {{ $user->name }} ({{ $user->email }})

## Message: {{ $feedbackData['visitor_message'] }}
@endcomponent
@endcomponent