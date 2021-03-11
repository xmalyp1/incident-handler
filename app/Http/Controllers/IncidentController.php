<?php

namespace App\Http\Controllers;

class IncidentController extends Controller
{
    private function showPage($title)
    {
        return view('incident', ['title' => $title]);
    }

    public function index()
    {
        return $this->showPage(__('common.incident'));
    }
}
