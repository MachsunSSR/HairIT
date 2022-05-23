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
            'category_id' => 'required'
        ],
        [
            'name.required' => 'Harap Masukkan Nama Produk',
            'stock.required' => 'Harap Masukkan Jumlah Stock Product',
            'description.required' => 'Harap Masukkan Description Produk',
            'picture.required' => 'Harap Masukkan Foto Produk',
            'price.required' => 'Harap Masukkan Harga Produk',
            'category_id.required' => 'Harap Masukkan Kategori Produk',
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
            'category_id' => 'required'
        ],
        [
            'name.required' => 'Harap Masukkan Nama Produk',
            'stock.required' => 'Harap Masukkan Jumlah Stock Product',
            'description.required' => 'Harap Masukkan Description Produk',
            'picture.required' => 'Harap Masukkan Foto Produk',
            'price.required' => 'Harap Masukkan Harga Produk',
            'category_id.required' => 'Harap Masukkan Kategori Produk',
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
                'stock' =>$request->stock,
                'description' =>$request->description,
                'picture' =>$fileName,
                'price' =>$request->price,
                'category_id' =>$request->category_id
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
                    'category_id' =>$request->category_id
                ];
            }
        $product->update($product_data);

        return redirect('/layanan');
    }

    public function destroy(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $path = "/images";
        File::delete($path, $request->picture);
        $product->delete();

        return redirect('product');
    }

    public function search(Request $request, $product_name)
    {
        $search = $request->get('search');
        $products = Layanan::where('name', 'LIKE', '%'.$product_name.'%')->get();

        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('products', 'cart_items.product_id', '=', 'products.id')
            ->get();

        return view('dashboard.polluxui.customer.productsBySearch', compact('products', 'carts'));
    }
}