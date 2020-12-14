<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Process extends Model {

    public $primaryKey = "id";

    protected $fillable = [
        'product_id',
        'name',
        'function',
        'function2',
        'function3'
    ];

    public function step()
    {
        return $this->hasMany(Step::class);
    }
}