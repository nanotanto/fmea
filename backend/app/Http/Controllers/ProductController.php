<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $data = Product::all();
        return response()->json($data);
    }

    public function show($id){
        $data = Product::where("id",$id)->get();
        return response()->json($data);
    }

    public function add(Request $request)
    {
        Product::create($request->all());
    }

    public function newFmea(){
        $data = Product::latest()->first();
        return response()->json($data);
    }

    public function update(Request $request, $id){
        $data = Product::findOrFail($id);
        $data->fill($request->all());

        if ($request->input("revision_date") == "") {            
            $data->revision_date = null;
        }else{
            $data->revision_date = $request->input("revision_date");
        }

        $data->save();
    }

}
