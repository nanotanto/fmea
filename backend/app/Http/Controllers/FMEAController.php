<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Product;

class FMEAController extends Controller
{
    public function show($id){
        $datas =  DB::table('products')
                ->select(
                    'processes.name as process','processes.function as process_function','processes.function2 as process_function2','processes.function3 as process_function3',
                    'steps.name as step', 'steps.function as step_function',
                    'elements.man as man', 'elements.func_man as man_function',
                    'elements.machine as machine', 'elements.func_machine as machine_function',
                    'elements.material as material', 'elements.func_material as material_function',
                    'elements.method as method', 'elements.func_method as method_function',
                    'elements.measure as measure', 'elements.func_measure as measure_function',
                    'elements.enviro as enviro', 'elements.func_enviro as enviro_function',
                    'modes.name as failure','modes.category as category',
                    'modes.effect_in as effect_in','modes.effect_next as effect_next','modes.effect_end as effect_end',
                    'modes.s as s',
                    'currents.element as element', 
                    'currents.cause as cause', 
                    'currents.prevention as prevention', 
                    'currents.o as o', 
                    'currents.detection as detection', 
                    'currents.d as d', 
                    'currents.ap as ap', 
                    'currents.sc as sc',
                    'currents.filter as filter',
                    'actions.prevention as prevention_plan',
                    'actions.detection as detection_plan',
                    'actions.pic as pic',
                    'actions.target_date as target_date',
                    'actions.status as status',
                    'actions.prevention_act as prevention_act',
                    'actions.detection_act as detection_act',
                    'actions.finish_date as finish_date',
                    'actions.o as o2',
                    'actions.d as d2',
                    'currents.ap as ap2', 
                    'currents.sc as sc2',
                    'currents.action as action'
                )
                ->leftJoin('processes','processes.product_id','=','products.id')
                ->leftJoin('steps','steps.process_id','=','processes.id')
                ->leftJoin('elements','elements.step_id','=','steps.id')
                ->leftJoin('modes','modes.step_id','=','steps.id')
                ->leftJoin('currents','currents.mode_id','=','modes.id')
                ->leftJoin('actions','actions.current_id','=','currents.id')
                ->where('products.id',$id)
                ->get();
                
        $fmea = Product::where('id','=',$id)->first();    
        
        //return response()->json($data);

        return view('fmea',compact('datas','fmea'));
    }
}
