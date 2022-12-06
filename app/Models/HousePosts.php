<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HousePosts extends Model
{
    use HasFactory;
    protected $table = "product";
    protected $fillable = [
        'size', 'price', 'n_bedroom', 'n_bathroom', 'description','user_id'
    ];

    public function user()
    {

        return $this->belongsTo(User::class);
    }
    public function image()
    {

        return $this->hasMany(Image::class, "product_id", "id");
    }
    public function status()
    {

        return $this->belongsTo(Status::class, "product_id", "id");
    }
    public function categories()
    {

        return $this->belongsTo(Categories::class, "product_id", "id");
    }
    public function favorite()
    {
        return $this->hasMany(Favorite::class, "product_id", "id");
    }
    public function address()
    {
        return $this->belongsTo(Address::class, "product_id", "id");
    }
}