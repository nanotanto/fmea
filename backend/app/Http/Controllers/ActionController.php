<?php

namespace App\Http\Controllers;

use App\Action;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    public function index(){
        $data = Action::all();
        return response()->json($data);
    }
}
