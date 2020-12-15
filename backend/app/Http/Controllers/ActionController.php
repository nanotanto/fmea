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

    public function show($id){
        $data = Action::where("mode_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        //$data = Action::create($request->all());

        $data = new Action();
        $data->fill($request->all());

        if ($request->input("target_date") == "") {            
            $data->target_date = null;
        }else{
            $data->target_date = $request->input("target_date");
        }

        if ($request->input("finish_date") == "") {            
            $data->finish_date = null;
        }else{
            $data->finish_date = $request->input("finish_date");
        }

        $data->save();
    }

    public function update(Request $request, $id){
        $data = Action::findOrFail($id);
        $data->fill($request->all());

        if ($request->input("target_date") == "") {            
            $data->target_date = null;
        }else{
            $data->target_date = $request->input("target_date");
        }

        if ($request->input("finish_date") == "") {            
            $data->finish_date = null;
        }else{
            $data->finish_date = $request->input("finish_date");
        }

        $data->save();
    }

    public function delete(Request $request, $id){
        $data = Action::find($id);
        $data->delete();
    }
}
