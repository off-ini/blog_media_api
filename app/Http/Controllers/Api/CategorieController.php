<?php

namespace App\Http\Controllers\Api;

use App\Categorie;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategorieResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategorieResource::collection(Categorie::all());
    }

    public function padding($nb)
    {
        return CategorieResource::collection(Categorie::paginate($nb));
    }

    public function searching(Request $request)
    {
        $data = Categorie::where('label', 'like', '%'.$request->search.'%')
                        ->orderBy('created_at', 'DESC')
                        ->get();
        return CategorieResource::collection($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $v = Validator::make($request->all(), [
            'label' => 'required',
        ]);

        if($v->fails()) return response()->json($v->errors(), 400);
            $data = new Categorie();
            $data->label = $request->label;

            $data->save();

        return response()->json(new CategorieResource($data), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Categorie::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        return response()->json(new CategorieResource($data), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = Categorie::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            $data->update($request->all());

            return response()->json(new CategorieResource($data), 200);
        }
    }

    public function active($id)
    {
        $data = Categorie::find($id);
        if($data->flag)
        {
            $data->update([
                'flag' => 0,
            ]);
        }else{
            $data->update([
                'flag' => 1,
            ]);
        }
        return response()->json(new CategorieResource($data), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Categorie::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            $data->delete();
            return response()->json(new CategorieResource($data), 200);
        }
    }
}
