<?php

namespace App\Http\Controllers;

use App\Models\InsuranceCompany;
use App\Models\MaritalStatus;

class IncidentController extends Controller
{
    private function showPage($title)
    {
        return view('incident', ['title' => $title],[
            'maritalStatuses' => MaritalStatus::all(),
            'insuranceCompanies' => InsuranceCompany::all(),
        ]);
    }

    public function index()
    {

        return $this->showPage(__('common.incident'));
    }
}
