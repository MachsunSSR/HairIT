<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = "orders";
    protected $fillable = [
        "order_address",
        "total_price",
        "order_date",
        "order_time",
        "Metode_pembayaran",
        "Type_Booking"
    ];
}
