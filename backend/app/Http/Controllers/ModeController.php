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

    public function show($id){
        $data = Mode::where("step_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        Mode::create($request->all());
    }

    public function update(Request $request, $id){
        $data = Mode::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Mode::find($id);
        $data->delete();
    }
}
