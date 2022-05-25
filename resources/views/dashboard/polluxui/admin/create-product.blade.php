@extends('dashboard.polluxui.partials.master')

@section('title')
Create Product
@endsection

@section('content')
@if (Auth::user()->role == 'admin')
<br>
<h3>Masukan Data Salon</h3>
<br>
<div class="card mb-4">
    <div class="formcreate m-5">
        <form action="{{ url('layanan') }}" enctype="multipart/form-data" method="POST">
            @csrf
            <div class="mb-3">
                <label>Nama Salon</label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="name">
            </div>
            @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Masukkan Kategori Layanan</label>
                <br>
                <select name="category_id">
                    <option disabled>-- Pilih Kategori Layanan --</option>
                    @foreach ($category as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            @error('category')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Kapasitas</label>
                <input type="number" class="form-control" id="exampleInputPassword1" name="stock">
            </div>
            @error('stock')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Deskripsi Salon</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="description">
            </div>
            @error('alamat')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Alamat Salon</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="alamat">
            </div>
            @error('Open_toko')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
             <div class="mb-3">
                <label>Jam Buka</label>
                <input type="time" class="form-control" id="exampleInputPassword1" name="timeOpen">
            </div>
            @error('Close_toko')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
             <div class="mb-3">
                <label>Jam Tutup</label>
                <input type="time" class="form-control" id="exampleInputPassword1" name="timeClose">
            </div>
            @error('description')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Gambar Salon</label>
                <input type="file" class="form-control" id="exampleInputPassword1" name="picture">
            </div>
            @error('picture')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="mb-3">
                <label>Harga Layanan</label>
                <input type="number" class="form-control" id="exampleInputPassword1" name="price">
            </div>
            @error('price')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
@else
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center text-center error-page bg-primary">
            <div class="row flex-grow">
                <div class="col-lg-7 mx-auto text-white">
                    <div class="row align-items-center d-flex flex-row">
                        <div class="error-page-divider text-lg-left pl-lg-4">
                            <h2>SORRY! You dont have access :)</h2>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 text-center mt-xl-2">
                            <a class="text-white font-weight-medium" href="{{ url('layanans') }}">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endif
@endsection