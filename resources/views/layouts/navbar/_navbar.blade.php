<nav class="navbar navbar-expand-md navbar-dark fixed-top shadow-sm navbar-rpu">
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
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            @include('layouts.navbar._navbar_link', ['route' => 'home'])
            @include('layouts.navbar._navbar_link', ['route' => 'support', 'key' => 'common.help'])
            @include('layouts.navbar._navbar_link', ['route' => 'incident'])

            <hr class="my-1"/>

            <!-- Authentication Links -->
            @guest
                @include('layouts.navbar._navbar_link', ['button' => true, 'route' => 'login'])

                <hr class="mt-1"/>

                @include('layouts.navbar._navbar_link', ['button' => true, 'route' => 'register'])
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
