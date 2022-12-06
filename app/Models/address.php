<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class address extends Model
{
    use HasFactory;
    protected $table = 'address';
    protected $fillable = [
        'city', 'road', 'latitude', 'longitude','product_id'
    ];

    public function HousePosts(){

        return $this->hasOne(HousePost::class);
    }
}
