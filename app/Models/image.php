<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Image extends Model
{
    use HasFactory;
    protected $table = "image";
    protected $fillable = [
        'image', 'product_id'
    ];

    // protected function name(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('uploads/'.$value),
    //     );
    // }
    public function HousePosts(){

        return $this->belongsTo(HousePost::class);
    }
}
