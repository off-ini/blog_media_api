<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\VideoResource;
use App\Video;
use App\VideoLike;
use App\VideoViwer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VideoResource::collection(Video::orderBy('created_at', 'DESC')->get());
    }

    public function padding($nb)
    {
        return VideoResource::collection(Video::orderBy('created_at', 'DESC')->paginate($nb));
    }

    public function randomPadding($nb)
    {
        return VideoResource::collection(Video::inRandomOrder()->paginate($nb));
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
            'videos' => 'required|max:52224',
        ]);

        if($v->fails()) return response()->json($v->errors(), 400);
            $videos = $request->videos;
            for($i = 0; $i < count($videos); $i++)
            {
                $name = File::video($videos[$i]['data']);
                if($name)
                {
                    $data = new Video();
                    $data->code = Video::getCode();
                    $data->url = $name;

                    if(isset($videos[$i]['thumnail'])){
                        $name = File::thumnail($videos[$i]['thumnail'], 'videos');
                        if($name)
                        {
                            $data->thumnail = $name;
                        }
                    }

                    $data->view = isset($videos[$i]['view']) ? $videos[$i]['view'] : 0;
                    $data->like = isset($videos[$i]['like']) ? $videos[$i]['like'] : 0;
                    $data->unlike = isset($videos[$i]['unlike']) ? $videos[$i]['unlike'] : 0;
                    $data->duration = isset($videos[$i]['duration']) ? $videos[$i]['duration'] : 0;
                    $data->size = isset($videos[$i]['size']) ? $videos[$i]['size'] : 0;
                    $data->height = isset($videos[$i]['height']) ? $videos[$i]['height'] : 0;
                    $data->width = isset($videos[$i]['width']) ? $videos[$i]['width'] : 0;
                    $data->title = $request->title ? $request->title : null;
                    $data->user_id = Auth::user()->id;
                    $data->flag = 0;

                    DB::beginTransaction();
                    $data->save();
                    if($request->categories) $data->categories()->sync($request->categories);
                    if($request->tags) $data->tags()->sync($request->tags);
                    DB::commit();
                }else{
                    $args['error'] = true;
                    $args['message'] = "No videos data found";
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
            'video_id' => 'required',
        ]);

        if($v->fails()) {
            $args['error'] = true;
            $args['message'] = $v->errors();
            return response()->json($args, 400);
        }

        $data = new VideoViwer();
        $data->user_ip = $request->user_ip;
        $data->user_code = $request->user_code;
        $data->video_id = $request->video_id;
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
            'video_id' => 'required',
        ]);

        if($v->fails()) {
            $args['error'] = true;
            $args['message'] = $v->errors();
            return response()->json($args, 400);
        }

        $data = VideoLike::where(['user_code' => $request->user_code,'video_id' => $request->video_id])->first();
        if($data != null)
        {
            if($request->has_liked == $data->has_liked)
            {
                $data->delete();
            }else{
                $data->update(['has_liked' => $request->has_liked]);
            }

        }else{
            $data = new VideoLike();
            $data->has_liked = $request->has_liked;
            $data->user_ip = $request->user_ip;
            $data->user_code = $request->user_code;
            $data->video_id = $request->video_id;
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
        $data = Video::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        return response()->json(new VideoResource($data), 200);
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
        $data = Video::find($id);
        $all = $request->all();
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            if(isset($all['url']))
            {
                $name = File::video($all['url']);
                if($name)
                {
                    $all['url'] = $name;
                }else $all['url'] = $data->url;
                File::deleteVideo($data->url);
            }

            if(isset($all['thumnail']))
            {
                $name = File::thumnail($all['thumnail'], 'videos');
                if($name)
                {
                    $all['thumnail'] = $name;
                }else $all['thumnail'] = $data->thumnail;
                File::deleteThumnail($data->thumnail);
            }

            $data->update($all);
            $data->categories()->sync($request->categories);
            $data->tags()->sync($request->tags);

            return response()->json(new VideoResource($data), 200);
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
        $data = Video::find($id);
        if(is_null($data))
            return response()->json(['error' => 'Resource introuvable'], 404);
        else
        {
            $data->categories()->sync([]);
            $data->tags()->sync([]);
            File::deleteVideo($data->url);
            $data->delete();
            return response()->json(new VideoResource($data), 200);
        }
    }
}
