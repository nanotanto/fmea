<?php

namespace App\Http\Controllers;

use App\Process;
use Illuminate\Http\Request;

class ProcessController extends Controller
{
    public function index(){
        $data = Process::select('id')->get();
        return response()->json($data);
    }

    public function show($id){
        $data = Process::where("product_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        Process::create($request->all());
    }

    public function update(Request $request, $id){
        $data = Process::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Process::find($id);
        $data->delete();
    }
}
