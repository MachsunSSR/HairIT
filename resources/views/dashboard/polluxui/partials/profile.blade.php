@extends('dashboard.polluxui.partials.master')

@section('title')
    Edit Profile
@endsection

@section('content')
    <div class="card rounded bg-white">
        <div class="col-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Edit Profile</h4>
                </div>
                <div class="row mt-2">
                    <form action="/profile/{{ Auth::user()->id }}" method="post" class="row mt-3">
                        @csrf
                        @method('patch')

                        <div class="col-md-12">
                            <label class="labels">Name</label>
                            <input type="text" class="form-control" placeholder="Name"
                                value="{{ $user->name }}" name="name">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">nomer telefon</label>
                            <input type="number" class="form-control" placeholder="Phone"
                                value="{{ $user->nomer_telefon }}" name="phone">
                        </div>
                        
                        <div class="col-md-12">
                            <label class="labels">jenis kelamin</label>
                            <input type="text" class="form-control" placeholder="jenis_kelamin"
                                value="{{ $user->jenis_kelamin }}" name="jenis_kelamin">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">alamat</label>
                            <input type="text" class="form-control" placeholder="Alamat"
                                value="{{ $user->alamat }}" name="alamat">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Email</label>
                            <input type="text" class="form-control" placeholder="Email"
                                value="{{ $user->email }}" name="email">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Date of Birth</label>
                            <input type="date" class="form-control" placeholder="Date of Birth"
                                value="{{ $user->dob }}" name="dob">
                        </div>
                        <button type="submit" class="ml-2 mt-3 btn btn-primary profile-button">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
