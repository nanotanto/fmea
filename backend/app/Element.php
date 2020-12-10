<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Element extends Model {
    
    public $primaryKey = "id";

    protected $fillable = [
        'step_id',
        'man',
        'machine',
        'material',
        'method',
        'measure',
        'enviro',
        'func_man',
        'func_machine',
        'func_material',
        'func_method',
        'func_measure',
        'func_enviro'
    ];

    public function step()
    {
        return $this->belongsTo(Step::class);
    }

}