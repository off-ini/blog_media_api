<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Image;
use App\ImageLike;
use App\ImageViwer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ImageResource::collection(Image::orderBy('created_at', 'DESC')->get());
    }

    public function padding($nb)
    {
        return ImageResource::collection(Image::orderBy('created_at', 'DESC')->paginate($nb));
    }

    public function randomPadding($nb)
    {
        return ImageResource::collection(Image::inRandomOrder()->paginate($nb));
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
        $args = array();
        $args['error'] = false;

        $v = Validator::make($request->all(), [
            'images' => 'required|max:52224',
        ]);

        if($v->fails()) return response()->json($v->errors(), 400);
            $images = $request->images;
            for($i = 0; $i < count($images); $i++)
            {
                $name = File::image($images[$i]['data']);
                if($name)
                {
                    $data = new Image();
                    $data->code = Image::getCode();
                    $data->url = $name;

                    $data->view = isset($images[$i]['view']) ? $images[$i]['view'] : 0;
                    $data->like = isset($images[$i]['like']) ? $images[$i]['like'] : 0;
                    $data->unlike = isset($images[$i]['unlike']) ? $images[$i]['unlike'] : 0;
                    $data->size = isset($images[$i]['size']) ? $images[$i]['size'] : 0;
                    $data->height = isset($images[$i]['height']) ? $images[$i]['height'] : 0;
                    $data->width = isset($images[$i]['width']) ? $images[$i]['width'] : 0;
                    $data->album_id = $request->album_id ? $request->album_id : null;
                    $data->title = $request->title ? $request->title : null;
                    $data->user_id = Auth::user()->id;

                    DB::beginTransaction();
                    $data->save();
                    if($request->categories) $data->categories()->sync($request->categories);
                    if($request->tags) $data->tags()->sync($request->tags);
                    DB::commit();
                }else{
                    $args['error'] = true;
                    $args['message'] = "No images data found";
                    return response()->json($args, 404);
                }
            }

        return response()->json('Ok', 201);
    }

    public function store_view(Request $request)
    {
        $args = array();
        $args['error'] = false;

        $v = Validator::make($request->all(), [
            'user_ip' => 'required',
            'user_code' => 'required',
            'image_id' => 'required',
        ]);

        if($v->fails()) {
            $args['error'] = true;
            $args['message'] = $v->errors();
            return response()->json($args, 400);
        }

        $data = new ImageViwer();
        $data->user_ip = $request->user_ip;
        $data->user_code = $request->user_code;
        $data->image_id = $request->image_id;
        $data->user_id = $request->user_id ? $request->user_id : null;
        $data->save();

        $args['error'] = false;
        $args['message'] = "success saved";
        return response()->json($args, 200);
    }

    public function store_like(Request $request)
    {
        $args = array();
        $args['error'] = false;

        $v = Validator::make($request->all(), [
            'has_liked' => 'required',
            'user_ip' => 'required',
            'user_code' => 'required',
            'image_id' => 'required',
        ]);

        if($v->fails()) {
            $args['error'] = true;
            $args['message'] = $v->errors();
            return response()->json($args, 400);
        }

        $data = ImageLike::where(['user_code' => $request->user_code,'image_id' => $request->image_id])->first();
        if($data != null)
        {
            if($request->has_liked == $data->has_liked)
            {
                $data->delete();
            }else{
                $data->update(['has_liked' => $request->has_liked]);
            }
        }else{
            $data = new ImageLike();
            $data->has_liked = $request->has_liked;
            $data->user_ip = $request->user_ip;
            $data->user_code = $request->user_code;
            $data->image_id = $request->image_id;
            $data->user_id = $request->user_id ? $request->user_id : null;
            $data->save();
        }

        $args['error'] = false;
        $args['message'] = "success saved";
        return response()->json($args, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Image::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        return response()->json(new ImageResource($data), 200);
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
        $data = Image::find($id);
        $all = $request->all();
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            if(isset($all['url']))
            {
                $name = File::image($all['url']);
                if($name)
                {
                    $all['url'] = $name;
                }else $all['url'] = $data->url;
            }

            $data->update($all);
            $data->categories()->sync($request->categories);
            $data->tags()->sync($request->tags);

            return response()->json(new ImageResource($data), 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Image::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            $data->categories()->sync([]);
            $data->tags()->sync([]);
            File::deleteImage($data->url);
            $data->delete();
            return response()->json(new ImageResource($data), 200);
        }
    }
}
