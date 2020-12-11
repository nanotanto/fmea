<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model {
    public $primaryKey = "id";

    protected $fillable = [
        'mode_id',
        'current_id',
        'element',
        'cause',
        'prevention',
        'prevention_act',
        'o',
        'detection',
        'detection_act',
        'd',
        'ap',
        'sc',
        'filter',
        'pic',
        'target_date',
        'status',
        'prevention_act',
        'detection_act',
        'action',
        'finish_date'
    ];

}