<?php

namespace App\Http\Controllers;

use App\Models\Product;

class HomeController extends Controller
{
    private function showPage($title)
    {
        return view('welcome', ['title' => $title]);
    }

    public function index()
    {
        return view('welcome',[
            'title' => 'Domov',
            'products' => Product::where('valid',true)->get()
        ]);
    }
}
