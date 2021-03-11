<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    private function showPage($title)
    {
        return view('welcome', ['title' => $title]);
    }

    public function index()
    {
        return $this->showPage(__('common.home'));
    }
}
