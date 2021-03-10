<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebPageController extends Controller
{
    private function showPage($title)
    {
        return view('template',['title' => $title]);
    }

    public function home(){
        return $this->showPage('Domov');
    }

    public function incident(){
        return $this->showPage('Registrácia úrazu');
    }

    public function help(){
        return $this->showPage('Podpora');
    }
}
