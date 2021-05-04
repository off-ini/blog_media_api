<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Image extends Model
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

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function viwes()
    {
        return $this->hasMany('App\ImageViwer', 'image_id');
    }

    public function likes()
    {
        return $this->hasMany('App\ImageLike', 'image_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Categorie', 'categorie_images', 'categorie_id', 'image_id')
                    ->withTimestamps();
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'image_tags', 'image_id', 'tag_id')
                    ->withTimestamps();
    }
}
