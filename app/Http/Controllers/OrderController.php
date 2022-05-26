<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Layanan;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductOrder;
use App\Models\UserOrder;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $user_id, $layanan_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();
        if ($cart) {
            $cartItem = CartItem::where('cart_id', $cart->id)->where('layanan_id', $layanan_id)->first();
            if ($cartItem) {
                $cartItem->quantity += 1;
                $cart->total_product += 1;
                $cart->save();
                $cartItem->save();
            } else {
                CartItem::create([
                    'cart_id' => $cart->id,
                    'layanan_id' => $layanan_id,
                    'quantity' => 1,
                ]);
            }
        } else {
            $cart = Cart::create([
                'user_id' => $user_id,
                'total_layanan' => 1,
            ]);
            CartItem::create([
                'cart_id' => $cart->id,
                'layanan_id' => $layanan_id,
                'quantity' => 1,
            ]);
        }

        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();
        
        $total = 0;
        foreach ($carts as $cart) {
            $total += $cart->price * $cart->quantity;
        }

        return redirect("/checkout");
    }

    public function index_endpoint(Request $request, $user_id, $layanan_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();
        if ($cart) {
            $cartItem = CartItem::where('cart_id', $cart->id)->where('layanan_id', $layanan_id)->first();
            if ($cartItem) {
                $cartItem->quantity += 1;
                $cart->total_product += 1;
                $cart->save();
                $cartItem->save();
            } else {
                CartItem::create([
                    'cart_id' => $cart->id,
                    'layanan_id' => $layanan_id,
                    'quantity' => 1,
                ]);
            }
        } else {
            $cart = Cart::create([
                'user_id' => $user_id,
                'total_layanan' => 1,
            ]);
            CartItem::create([
                'cart_id' => $cart->id,
                'layanan_id' => $layanan_id,
                'quantity' => 1,
            ]);
        }

        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();
        
        $total = 0;
        foreach ($carts as $cart) {
            $total += $cart->price * $cart->quantity;
        }

        return redirect("/checkout");
    }
    public function index_view(Request $request)
    {
        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();
        
        $total = 0;
        foreach ($carts as $cart) {
            $total += $cart->price * $cart->quantity;
        }

        return view('dashboard.polluxui.customer.checkout', compact('carts', 'total'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    
    {
        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();

        $total = 0;
        foreach ($carts as $cart) {
            $total += $cart->price * $cart->quantity;
        }
        // dd(gettype($request->Pembayaran));

        $order = Order::create([
            'order_address' => auth()->user()->alamat,
            // 'order_address' => $request->order_address,
            'order_date' => $request->Tanggal,
            'order_time' => $request->Jam,
            'Metode_pembayaran' => $request->Pembayaran,
            'Type_Booking' => $request->Type_Booking,
            // $request->order_date,
            // 'order_date' => tanggal,
            // $request->ordered_at,
            'total_price' => $total
        ]);
        
        foreach ($carts as $cart) {
            ProductOrder::create([
                'order_id' => $order->id,
                'layanan_id' => $cart->layanan_id,
                'amount' => $cart->quantity
            ]);

            Layanan::where('id', $cart->layanan_id)
                ->decrement('kuota', $cart->quantity);
        }

        UserOrder::create([
            'user_id' => auth()->user()->id,
            'order_id' => $order->id,
            'ordered_at' => $order->tanggal
        ]);


        //delete cartitem and cart after order
        foreach ($carts as $cart) {
            CartItem::where('cart_id', $cart->cart_id)->delete();
        }
        Cart::where('user_id', auth()->user()->id)->delete();

        return redirect('/myorders');
    }
    public function store_endpoint(Request $request)
    
    {
        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();

        $total = 0;
        foreach ($carts as $cart) {
            $total += $cart->price * $cart->quantity;
        }

        $order = Order::create([
            'order_address' => auth()->user()->alamat,
            // 'order_address' => $request->order_address,
            'order_date' => $request->Tanggal,
            'order_time' => $request->Jam,
            'Metode_pembayaran' => $request->Pembayaran,
            // $request->order_date,
            // 'order_date' => tanggal,
            // $request->ordered_at,
            'total_price' => $total
        ]);
        
        foreach ($carts as $cart) {
            ProductOrder::create([
                'order_id' => $order->id,
                'layanan_id' => $cart->layanan_id,
                'amount' => $cart->quantity
            ]);

            Layanan::where('id', $cart->layanan_id)
                ->decrement('kuota', $cart->quantity);
        }

        UserOrder::create([
            'user_id' => auth()->user()->id,
            'order_id' => $order->id,
            'ordered_at' => $order->tanggal
        ]);


        //delete cartitem and cart after order
        foreach ($carts as $cart) {
            CartItem::where('cart_id', $cart->cart_id)->delete();
        }
        Cart::where('user_id', auth()->user()->id)->delete();

         return redirect()->back();
    }

    public function store_Pembayaran_endpoint(Request $request)
    
    {
        $order = Order::create([
            'Metode_pembayaran' => $request->Pembayaran
        ]);
    }
    public function store_Booking_endpoint(Request $request)
    
    {

        $order = Order::create([
            'Type_Booking' => $request->Type_Booking
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();

        $userorders = UserOrder::where('user_id', auth()->user()->id)->get();

        $customerOrders = [];
        $orderdetails = [];
        $data = [];

        foreach ($userorders as $key => $order) {
            $productOrders = ProductOrder::where('order_id', $order->order_id)
            ->join('layanan', 'product_orders.layanan_id', '=', 'layanan.id')
            ->get();

            $orders = Order::where('id', $order->order_id)->get();

            array_push($customerOrders, $productOrders);
            array_push($orderdetails, $orders);
            array_push($data, $customerOrders, $orderdetails, $carts);
        }
        response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
