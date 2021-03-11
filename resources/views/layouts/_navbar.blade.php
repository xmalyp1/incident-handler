<nav class="navbar navbar-expand-md shadow-sm navbar-rpu">
    <a class="navbar-brand" href="{{ url('/') }}">
        {{ config('app.name', 'Laravel') }}
    </a>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="{{ __('Toggle navigation') }}">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line" style="margin-bottom: 0;"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
                <a class="nav-link" href="{{ route('home') }}">{{ __('common.home') }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('support') }}">{{ __('common.help') }}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('incident') }}">{{ __('common.incident') }}</a>
            </li>

            @guest
                @if (Route::has('login'))
                    <li class="nav-item nav-link-auth">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('common.login') }}</a>
                    </li>
                @endif

                @if (Route::has('register'))
                    <li class="nav-item nav-link-auth">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('common.register') }}</a>
                    </li>
                @endif
            @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown"
                       class="nav-link dropdown-toggle"
                       href="#"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        {{ Auth::user()->name }}
                    </a>

                    <div class="dropdown-menu dropdown-menu-right"
                         aria-labelledby="navbarDropdown">
                        <a class="dropdown-item"
                           href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                            {{ __('common.logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </div>
                </li>
            @endguest
        </ul>
    </div>
</nav>
