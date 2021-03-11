<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IncidentController extends Controller
{
    private function showPage($title)
    {
        return view('incident',['title' => $title]);
    }

    public function index(){
        return $this->showPage('Pracovný úraz');
    }
}
