<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [
        'category', 'product_id'
    ];

    public function HousePosts(){

        return $this->hasMany(HousePosts::class);
    }
}
