@extends('blockchain::layouts.app')

@section('content')

    <div class="container">
      <div class="col-md-12">
        <a href="{{url('/admin')}}" class="btn btn-secondary btn-sm mb-3"><- Back to Admin</a>
        <h3>Блокчейн</h3>
        <div id="root">
          <div class="content-box">

          </div>
        </div>
      </div>
    </div>

@endsection
