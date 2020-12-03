<?php

namespace App\Http\Controllers;

use App\Mode;
use Illuminate\Http\Request;

class ModeController extends Controller
{
    public function index(){
        $data = Mode::all();
        return response()->json($data);
    }
}
