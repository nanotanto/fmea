<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model {

    public $primaryKey = "id";

    protected $fillable = [
        'process_id',
        'name',
        'function'
    ];
        
}