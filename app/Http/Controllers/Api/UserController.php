<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::orderBy('created_at', 'DESC')->get());
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
            'type' => 'required',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'birth' => 'required',
            'password' => 'required|confirmed|min:8',
        ]);

        if($v->fails()) {
            $args['error'] = true;
            $args['validator'] = $v->errors();
            return response()->json($v->errors(), 400);
        }

        $data = new User();
            $data->name = $request->name;
            $data->email = $request->email;
            $data->birth = $request->birth;
            $data->password = Hash::make($request->password);
            $data->type = $request->type;

            if($request->phone) $data->phone = $request->phone;
            if($request->sexe) $data->sexe = $request->sexe;

            $data->save();

        return response()->json(new UserResource($data), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $args = array();
        $args['error'] = false;

        $data = User::find($id);
        if(is_null($data))
        {
            $args['error'] = true;
            $args['message'] = 'Resource not found';
          return response()->json($args, 404);
        }

        return response()->json(new UserResource($data), 200);
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
        $args = array();
        $args['error'] = false;

        $data = User::find($id);
        $all = $request->all();
        if(is_null($data))
        {
            $args['error'] = true;
            $args['message'] = 'Resource not found';
            return response()->json($args, 404);
        }
        else{

            unset($all['password']);
            unset($all['password_old']);
            unset($all['password_confirmation']);

            if($request->password && $request->password_old  && $request->password_confirmation)
            {
                if(Hash::check($request->password_old, $data->password))
                {
                    if($request->password != $request->password_confirmation){
                        $args['error'] = true;
                        $args['message'] = 'Bad confirmated password';
                        return response()->json($args, 400);
                    }
                    $all['password'] = Hash::make($request->password);
                }else {
                    $args['error'] = true;
                    $args['message'] = 'Bad old password';
                    return response()->json($args, 400);
                }
            }

            $data->update($all);

            return response()->json(new UserResource($data), 200);
        }
    }

    public function active($id)
    {
        $data = User::find($id);
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
        return response()->json(new UserResource($data), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $args = array();
        $args['error'] = false;

        $data = User::find($id);
        if(is_null($data))
        {
            $args['error'] = true;
            $args['message'] = 'Resource not found';
            return response()->json($args, 404);
        }
        else
        {
            $data->delete();;
            return response()->json(new UserResource($data), 200);
        }
    }
}
