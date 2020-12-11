<?php

namespace App\Http\Controllers;

use App\Mode;
use App\Process;
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

    public function indexAll(){
        $data = Process::select(
            'processes.name as item',
            'steps.name as step',
            'modes.id as id',
            'modes.name as mode',
            'modes.category as category',
            'modes.effect_in as in',
            'modes.effect_next as next',
            'modes.effect_end as end',
            'modes.s as s'
            )->Join('steps', 'steps.process_id', '=', 'processes.id')
            ->Join('modes', 'modes.step_id', '=', 'steps.id')
            ->orderBy('processes.id','asc')
            ->get();
        return response()->json($data);
    }

}
