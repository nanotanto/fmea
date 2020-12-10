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
        
    public function show($id){
        $data = Element::where("step_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        Element::create($request->all());
    }

    public function update(Request $request, $id){
        $data = Element::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Element::find($id);
        $data->delete();
    }
}
