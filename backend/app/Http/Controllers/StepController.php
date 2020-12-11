<?php

namespace App\Http\Controllers;

use App\Step;
use Illuminate\Http\Request;

class StepController extends Controller
{
    public function index(){
        $data = Step::all();
        return response()->json($data);
    }
    
    public function show($id){
        $data = Step::where("process_id",$id)->with('process')->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        Step::create($request->all());
    }

    public function update(Request $request, $id){
        $data = Step::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Step::find($id);
        $data->delete();
    }

    public function process_steps(){
        $data = Step::with('process')->orderBy('process_id','asc')->get();
        return response()->json($data);
    }

}
