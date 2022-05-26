<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Layanan;
use App\Models\Cart;
use App\Models\Order;
use App\Models\UserOrder;
use App\Models\ProductOrder;
use Dflydev\DotAccessData\Data;

class CustomerController extends Controller
{
    public function index()
    {
        $products = Layanan::all();

        $carts = Cart::where('user_id', auth()->user()->id)
            ->join('cart_items', 'carts.id', '=', 'cart_items.cart_id')
            ->join('layanan', 'cart_items.layanan_id', '=', 'layanan.id')
            ->get();

        return view('dashboard.polluxui.customer.products', compact('products', 'carts'));
    }

    public function index_endpoint()
    {
        $products = Layanan::all();
        return response()->json($products);
    }

    public function order_index()
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
        // response()->json($data);

        return view('dashboard.polluxui.customer.orders', compact('carts','customerOrders', 'orderdetails'));
    }
}
