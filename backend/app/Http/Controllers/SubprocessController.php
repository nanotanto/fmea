<?php

namespace App\Http\Controllers;

use App\Subprocess;
use Illuminate\Http\Request;

class SubprocessController extends Controller
{
    public function index(){
        $data = Subprocess::all();
        return response()->json($data);
    }
}
