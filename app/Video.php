<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Video extends Model
{
    protected $guarded  = [
        'id'
    ];

    public static function getCode()
    {
        $key = Str::lower(Str::random(16));
        if(static::where(['code' => $key])->first())
            return static::getCode();
        return $key;
    }

    public static function getDuration($seconds)
    {
        $t = round($seconds);
        return sprintf('%02d:%02d', ($t/60%60), $t%60);
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function viwes()
    {
        return $this->hasMany('App\VideoViwer', 'video_id');
    }

    public function likes()
    {
        return $this->hasMany('App\VideoLike', 'video_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Categorie', 'categorie_videos', 'categorie_id', 'video_id')
                    ->withTimestamps();
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'video_tags', 'tag_id', 'video_id')
                    ->withTimestamps();
    }
}
