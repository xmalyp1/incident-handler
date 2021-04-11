@extends('layouts.app')

@section('content')
    <div id="incident-props"
         data-marital-status="{{$maritalStatuses}}"
         data-insurance-company="{{$insuranceCompanies}}"
         data-token ="{{@csrf_token()}}"></div>
    <div id="incident" class="container"></div>
@endsection
