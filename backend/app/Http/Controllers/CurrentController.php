<?php

namespace App\Http\Controllers;

use App\Current;
use App\Process;
use Illuminate\Http\Request;

class CurrentController extends Controller
{
    public function index(){
        $data = Current::all();
        return response()->json($data);
    }

    public function show($id){
        $data = Current::where("mode_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        Current::create($request->all());
    }

    public function update(Request $request, $id){
        $data = Current::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Current::find($id);
        $data->delete();
    }

    public function indexAll($id){
        $data = Process::select(
            'processes.name as item',
            'steps.name as step',
            'modes.id as mode_id',
            'modes.name as mode',
            'modes.category as category',
            'modes.effect_in as in',
            'modes.effect_next as next',
            'modes.effect_end as end',
            'modes.s as s',
            'currents.id as id',
            'currents.element as element',
            'currents.cause as cause',
            'currents.prevention as prevention',
            'currents.o as o',
            'currents.detection as detection',
            'currents.d as d',
            'currents.ap as ap',
            'currents.sc as sc'
            )->Join('steps', 'steps.process_id', '=', 'processes.id')
            ->Join('modes', 'modes.step_id', '=', 'steps.id')
            ->Join('currents', 'currents.mode_id', '=', 'modes.id')
            ->orderBy('processes.id','asc')
            ->where('processes.product_id',$id)
            ->get();
        return response()->json($data);
    }
}
