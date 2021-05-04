<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Str;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded  = [
        'id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function getCode()
    {
        $key = Str::lower(Str::random(32));
        if(static::where(['code' => $key])->first())
            return static::getCode();
        return $key;
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function albums()
    {
        return $this->hasMany('App\Album', 'user_id');
    }

    public function images()
    {
        return $this->hasMany('App\Image', 'user_id');
    }

    public function videos()
    {
        return $this->hasMany('App\Video', 'user_id');
    }

    public function video_viwers()
    {
        return $this->hasMany('App\VideoViwer', 'user_id');
    }

    public function image_viwers()
    {
        return $this->hasMany('App\ImageViwer', 'user_id');
    }

    public function video_likes()
    {
        return $this->hasMany('App\VideoLike', 'user_id');
    }

    public function image_likes()
    {
        return $this->hasMany('App\ImageLike', 'user_id');
    }
}
