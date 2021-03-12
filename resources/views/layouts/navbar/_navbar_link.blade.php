@if (Route::has($route))
    <li class="nav-item @if((!isset($button) || !$button) && Route::current()->getName() == $route)
        active
    @endif">
        <a @if(isset($button) && $button)
           type="button"
           role="button"
           @endif
           class="nav-link {{ isset($button) && $button ? 'btn btn-outline-light mx-md-1' : 'pl-2' }}"
           href="{{ route($route) }}">
            {{ __($key ?? "common.$route") }}
        </a>
    </li>
@endif
