<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use File;
use App\Models\Cart;

class LayananController extends Controller
{
    public function index()
    {
        $layanan = DB::table('layanan')->get()->all();

        return view('dashboard.polluxui.admin.index-product', compact('layanan'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'description' => 'required',
            'picture' => 'required',
            'price' => 'required',
            'category_id' => 'required',
            'alamat' => 'required',
            // 'Open_toko' => 'required',
            // 'Close_toko' => 'required'
        ],
        [
            'name.required' => 'Harap Masukkan Nama Produk',
            'stock.required' => 'Harap Masukkan Jumlah Stock Product',
            'description.required' => 'Harap Masukkan Description Produk',
            'picture.required' => 'Harap Masukkan Foto Produk',
            'price.required' => 'Harap Masukkan Harga Produk',
            'category_id.required' => 'Harap Masukkan Kategori Produk',
            'alamat.required' => 'harap masukan alamat',
            // 'Open_toko.required' => 'harap masukan jam toko buka',
            // 'Close_toko.required' => 'harap masukan jam toko tutup'
        ]
    );

        $fileName = time().'.'.$request->picture->extension();

        $category = new Layanan;
        $category->name = $request->name;
        $category->kuota = $request->stock;
        $category->description = $request->description;
        $category->picture = $fileName;
        $category->price = $request->price;
        $category->category_id = $request->category_id;
        $category->alamat = $request->alamat;
        $category->Open_toko = $request->timeOpen;
        $category->Close_toko = $request->timeClose;

        $category->save();
        $request->picture->move(public_path('images'), $fileName);

        return redirect('layanan')->with('success', 'Data anda berhasil ditambahkan');
    }

    public function create(){
        $category = Category::all();

        return view ('dashboard.polluxui.admin.create-product', compact('category'));
    }

    public function edit($id){
        $category = Category::all();
        $layanan = Layanan::findorfail($id);

        return view('dashboard.polluxui.admin.edit-product', compact('layanan', 'category'));
    }

    public function show($id){
        $layanan = Layanan::findOrFail($id);
        return view('dashboard.product.show', compact('layanan'));
    }

    public function update(Request $request, $id){
        
        $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'description' => 'required',
            'picture' => 'required',
            'price' => 'required',
            'category_id' => 'required',
            'alamat' => 'required',
        ],
        [
            'name.required' => 'Harap Masukkan Nama Produk',
            'stock.required' => 'Harap Masukkan Jumlah Stock Product',
            'description.required' => 'Harap Masukkan Description Produk',
            'picture.required' => 'Harap Masukkan Foto Produk',
            'price.required' => 'Harap Masukkan Harga Produk',
            'category_id.required' => 'Harap Masukkan Kategori Produk',
            'alamat.required' => 'harap masukan alamat',
        ]
    );

    $product = Layanan::findOrFail($id);

    if($request->has('picture'))
        {

            $path = "images/";
            File::delete($path . $product->picture);

            $fileName = time().'.'.$request->picture->extension();
            $request->picture->move(public_path('images'), $fileName);

            $product_data = 
            [
                'name' =>$request->name,
                'stock' =>$request->kuota,
                'description' =>$request->description,
                'picture' =>$fileName,
                'price' =>$request->price,
                'category_id' =>$request->category_id,
                'alamat' => $request->alamat,
                'Open_toko' => $request->timeOpen,
                'Close_toko' => $request->timeClose
            ];

        }else
            {
                $product_data = 
                [
                    'name' =>$request->name,
                    'stock' =>$request->stock,
                    'description' =>$request->description,
                    'picture' =>$request->picture,
                    'price' =>$fileName,
                    'category_id' =>$request->category_id,
                    'alamat' => $request->alamat,
                    'Open_toko' => $request->timeOpen,
                    'Close_toko' => $request->timeClose
                ];
            }
        $product->update($product_data);

        return redirect('/layanan');
    }

    public function destroy(Request $request, $id)
    {
        $product = Layanan::findOrFail($id);

        $path = "/images";
        File::delete($path, $request->picture);
        $product->delete();

        return redirect('layanan');
    }

    public function search(Request $request, $layanan_name)
    {
        $search = $request->get('search');
        $layanan = Layanan::where('name', 'LIKE', '%'.$layanan_name.'%')->get();

        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();

        return view('dashboard.polluxui.customer.layananBySearch', compact('layanan', 'carts'));
    }
}