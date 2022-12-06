<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorite extends Model
{
    use HasFactory;
    protected $table = 'favorite';
    protected $fillable = [
        'favorite','user_id', 'product_id'
    ];
    public function HousePosts(){
        return $this->belongToMany(HousePosts::class);
    }
    public function User(){
        return $this->belongToMany(User::class);
    }
}
