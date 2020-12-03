<?php

namespace App\Http\Controllers;

use App\Current;
use Illuminate\Http\Request;

class CurrentController extends Controller
{
    public function index(){
        $data = Current::all();
        return response()->json($data);
    }
}
