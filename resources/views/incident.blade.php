@extends('layouts.app')

@section('content')
    <div id="incident-props"
         data-marital-status="{{$maritalStatuses}}"
         data-insurance-company="{{$insuranceCompanies}}"></div>
    <div id="incident" class="container"></div>
@endsection
