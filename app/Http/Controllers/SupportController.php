<?php

namespace App\Http\Controllers;

class SupportController extends Controller
{
    private function showPage($title)
    {
        return view('support', ['title' => $title]);
    }

    public function index()
    {
        return $this->showPage(__('support'));
    }
}
