@extends('dashboard.polluxui.partials.master')

@section('content')
<br>
<h3>Detail Layanan</h3>
<br>
<div class="card px-3 py-3">
    <div class="konten m-4">
    <img src="{{ asset('images/'.$layanan->picture) }}" width="200px">
        <h3>{{ $layanan->name }}</h3>
        <h6>{{ $layanan->alamat }}</h6>
    <p>Open : {{$layanan->Open_toko}} </p>
        <p>{{ $layanan->description }}</p>
    <div class="opacity-50"><p>Kuota Tersedia : {{ $layanan->kuota }}</p></div>
    <h5>Rp : {{ $layanan->price }}</h5>
    <!-- <form action="" method="post">
        @csrf
        @method('delete')
        <a href="{{ route('layanan.edit',$layanan->id) }}" class="btn btn-primary btn-sm">Edit Layanan</a>
    </form> -->
</div>
</div>
@endsection