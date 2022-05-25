<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    // use HasFactory;

    protected $table = 'layanan';
    protected $fillable = 
    [
        'name',
        'kuota',
        'description', 
        'price', 
        'picture', 
        'category_id',
        'alamat',
        'Open_toko',
        'Close_toko',
        'review'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
