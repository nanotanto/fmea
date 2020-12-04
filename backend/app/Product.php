<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model {
    
    public $primaryKey = "id";

    protected $fillable = [
        'number',
        'code',
        'name',
        'issued',
        'company',
        'location',
        'customer',
        'model',
        'subject',
        'start_date',
        //'revision_date',
        'team',
        'respons',
        'level'
    ];

}