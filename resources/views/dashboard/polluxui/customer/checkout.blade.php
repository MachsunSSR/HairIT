@extends('dashboard.polluxui.partials.master')

@section('title')
    Order Product
@endsection

@section('content')
    <div class="card px-3 py-3">
        <div class="row align-items-center justify-content-between">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." aria-label="search"
                    aria-describedby="search" name="search" id="search">
                <button type="button" onclick=searchProduct() class="btn btn-primary ml-4">Search</button>
            </div>
            </div>
            <div class="col-2">
                <a class="nav-link count-indicator d-flex align-items-center justify-content-center"
                    id="notificationDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <i class="typcn typcn-shopping-cart mx-0"></i>
                    <sup class="badge badge-danger ml-1">{{ count($carts) }}</sup>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list px-3 py-3"
                    aria-labelledby="notificationDropdown">

                    @forelse ($carts as $item)
                        <div class="dropdown-item preview-item" style="width:10rem;">
                            <div class="preview-thumbnail">
                                <div class="preview-icon bg-success">
                                    <img class="mx-0" src="{{ asset('images/' . $item->picture) }}">
                                </div>
                            </div>
                            <div class="preview-item-content">
                                <h6 class="preview-subject font-weight-normal">{{ $item->name }}</h6>
                                <div
                                    class="row font-weight-light small-text mb-0 text-muted align-items-center justify-content-around">
                                    <form action="/add-quntity/{{ Auth::user()->id }}/{{ $item->id }}" method="post">
                                        @csrf
                                        @method('post')

                                        <button type="submit" class="btn btn-icon">
                                            <i class="typcn typcn-plus"></i>
                                        </button>
                                    </form>
                                    <h5 class="mb-0">{{ $item->quantity }}</h5>
                                    <form action="/subtract-quntity/{{ Auth::user()->id }}/{{ $item->id }}"
                                        method="post">
                                        @csrf
                                        @method('post')

                                        <button type="submit" class="btn btn-icon">
                                            <i class="typcn typcn-minus"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    @empty
                        <a class="dropdown-item preview-item justify-content-center align-items-center"
                            style="width:10rem;">
                            <p>Nothing here</p>
                        </a>
                    @endforelse

                    @if (count($carts) > 0)
                        <div class="dropdown-item preview-item align-items-center justify-content-center"
                            style="width:10rem;">
                            <form action="/checkout" method="post">
                                @csrf
                                @method('post')
                                <button class="btn btn-primary" type="submit">Order Now</button>
                            </form>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <div class="card mt-5">
        <div class="table-responsive">
            <table class="table table-hover">
                <!-- <thead>
                    <tr>
                        <th class="text-center">Name</th>
                        <th class="text-center">harga</th>
                        <th class="text-center">Guest</th>     
                        <!-- <th class="text-center">Hari</th>
                        <th class="text-center">Jam</th>
                        <th class="text-center">Metode Pembayaran</th> -->
                    <!-- </tr> -->
                <!-- </thead> -->
                <!-- <tbody>
                    @forelse ($carts as $key => $item)
                        <tr> -->
                            <!-- <td class="text-center">{{ $key + 1 }}</td> -->
                            <!-- <td>
                                <img src="{{ asset('images/' . $item->picture) }}"
                                    style="width: 235px; height: 150px; object-fit: cover; border-radius: 0%;"
                                    alt="{{ $item->name }}">
                            </td> -->
                            <!-- <td class="text-center">{{ $item->name }}</td>
                            <td class="text-center">Rp.{{ $item->price }}</td>
                            <td class="text-center"><div
                                    class="row font-weight-light small-text mb-0 text-muted align-items-center justify-content-around">
                                    <form action="/add-quntity/{{ Auth::user()->id }}/{{ $item->id }}" method="post">
                                        @csrf
                                        @method('post')

                                        <button type="submit" class="btn btn-icon">
                                            <i class="typcn typcn-plus"></i>
                                        </button>
                                    </form>
                                    <h5 class="mb-0">{{ $item->quantity }}</h5>
                                    <form action="/subtract-quntity/{{ Auth::user()->id }}/{{ $item->id }}"
                                        method="post">
                                        @csrf
                                        @method('post')

                                        <button type="submit" class="btn btn-icon">
                                            <i class="typcn typcn-minus"></i>
                                        </button>
                                    </form>
                                </div></td>
                            <form action="/order" method="post" class="mt-2 px-5 py-3">
                                 @csrf
                                 @method('post')
                                 <td>
                                <input type="Date" class="form-control" id="exampleInputPassword1" name="tanggal"></td>
                                <td class="text-center">
                                <input type="Time" class="form-control" id="exampleInputPassword1" name="timeClose"></td>
                                <td class="text-right px-5"> <select>
                                    <option value="pil1">BCA</option>
                                    <option value="pil2">BRI</option>
                                    <option value="pil3">BNI</option>
                                </select>
                                    <!-- <b class="card-title">Rp.{{ $item->price * $item->quantity }}</b> -->
                                <!-- </td>
                            </form>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="3">There's no cart yet</td>
                        </tr>
                    @endforelse
                </tbody> -->
                
            </table>
            <form action="/order" method="post" class="mt-2 px-5 py-3">
                @csrf
                @method('post')
                <div class="row">
                    <div class="form-group col-12">
                        <div class="col-sm">
                            <label class="form-label"><h5>Pilih Type Booking :</h5> </label>
                        </div>
                        <div class="col-sm">
                            <select name="Type_Booking" id="Type_Booking">
                                    <option value="BOOk A VISIT">Book a Visit</option>
                                    <option value="BOOK AN APPOINTMENT AT SALON">Book an Appointment at Salon</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <div class="col-sm">
                            <label class="form-label"><h5>Pilih Tanggal Booking :</h5> </label>
                        </div>
                        <div class="col-sm">
                            <input type="date" class="form-control" name="Tanggal" placeholder="Your Home Address" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <div class="col-sm">
                            <label class="form-label"><h5>Pilih Jam Booking :</h5> </label>
                        </div>
                        <div class="col-sm">
                            <input type="Time" class="form-control" name="Jam" placeholder="Your Home Address" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <div class="col-sm">
                            <label class="form-label"><h5>Pilih Jenis Pembayaran :</h5> </label>
                        </div>
                        <div class="col-sm">
                            <select name="Pembayaran" id="Pembayaran">
                                    <option value="BANK CENTRA ASIA">BCA</option>
                                    <option value="BANK RAKYAT INDONESIA">BRI</option>
                                    <option value="BANK NASIONAL INDONESIA">BNI</option>
                            </select>
                        </div>
                    </div>
                </div>
                <tfoot>
                    <tr>
                        <th colspan="5" class="px-5">Total</th>
                        <th class="px-5 text-right">
                            <h2>Rp. {{ $total }}</h2>
                        </th>
                    </tr>
                </tfoot>
                <div class="row mt-4">
                    <button class="btn btn-info btn-lg btn-block">
                        Order Now
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script>
        //make funtion on button with search document by id "search" then go to link 
        const searchProduct = () => {
            let search = document.getElementById('search').value;
            window.location.href = `/search-products=${search}`;
        }
    </script>
@endsection