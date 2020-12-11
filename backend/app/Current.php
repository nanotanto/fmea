<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Current extends Model {

    public $primaryKey = "id";

    protected $fillable = [
        'mode_id',
        'current_id',
        'element',
        'cause',
        'prevention',
        'o',
        'detection',
        'd',
        'ap',
        'sc',
        // 'filter',
        // 'pic',
        // 'target_date',
        // 'status',
        // 'prevention_act',
        // 'detection_act',
        // 'action',
        // 'finish_date'
    ];

    public function mode()
    {
        return $this->belongsTo(Mode::class);
    }
}