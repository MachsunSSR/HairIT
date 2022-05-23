@extends('dashboard.polluxui.partials.master')

@section('content')
<br>
<h3>Detail Layanan</h3>
<br>
<div class="card m-4">
    <div class="konten m-4">
        <h3>{{ $layanan->name }}</h3>
    <img src="{{ asset('images/'.$layanan->picture) }}" width="200px">
    <div class="opacity-50"><p>Stock : {{ $layanan->stock }}</p></div>
    <p>{{ $layanan->description }}</p>
    <h5>Rp : {{ $layanan->price }}</h5>
    <form action="" method="post">
        @csrf
        @method('delete')
        <a href="{{ route('layanan.edit',$layanan->id) }}" class="btn btn-primary btn-sm">Edit Layanan</a>
    </form>
</div>
</div>
@endsection