<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mode extends Model {

    public $primaryKey = "id";

    protected $fillable = [
        'step_id',
        'name',
        'category',
        'effect_in',
        'effect_next',
        'effect_end',
        's'
    ];

    public function step()
    {
        return $this->belongsTo(Step::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function current()
    {
        return $this->hasMany(Current::class);
    }
        
}