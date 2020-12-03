<?php

namespace App\Http\Controllers;

use App\Process;
use Illuminate\Http\Request;

class ProcessController extends Controller
{
    public function index(){
        $data = Process::all();
        return response()->json($data);
    }
}
