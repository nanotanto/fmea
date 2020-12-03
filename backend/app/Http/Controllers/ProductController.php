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
}
