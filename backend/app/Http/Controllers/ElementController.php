<?php

namespace App\Http\Controllers;

use App\Element;
use Illuminate\Http\Request;

class ElementController extends Controller
{
    public function index(){
        $data = Element::all();
        return response()->json($data);
    }
}
