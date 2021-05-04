<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $args = array();
        $args['error'] = false;
        $user = User::where(['email' => $request->email])->first();
        $user = Hash::check($request->password, $user->password) ? $user : null;

        if (!$user || ! $token = Auth::login($user)) {
            $args['error'] = true;
            $args['message'] = "Unauthorized";
            return response()->json($args, 401);
        }
        return $this->respondWithUserWithToken($token, new UserResource($user));
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $args = array();
        $args['error'] = false;
        //dd(Auth::user()->with('role_users.role', 'role_users.permissions')->get());
        //$user = User::where(['id' => Auth::user()->id])->with('role_users.role', 'role_users.permissions')->get();
        try {
            return response()->json(new UserResource(Auth::user()), 200);
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            $args['error'] = true;
            $args['message'] = "Unauthorized";
            return response()->json($args, 401);
        }
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $args = array();
        $args['error'] = false;
        Auth::logout();
        $args['message'] = "Successfully logged out";
        return response()->json($args);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $args = array();
        $args['error'] = false;
        try {
            return $this->respondWithToken(Auth::refresh());
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            $args['error'] = true;
            $args['message'] = "Unauthorized";
            return response()->json($args, 401);
        }
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 190
        ]);
    }

    protected function respondWithUserWithToken($token, $user)
    {
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 190
        ]);
    }
}
