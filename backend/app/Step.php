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

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function element()
    {
        return $this->hasMany(Element::class);
    }
        
}