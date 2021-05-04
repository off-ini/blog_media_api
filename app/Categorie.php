<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $guarded  = [
        'id'
    ];

    public function images()
    {
        return $this->belongsToMany('App\Image', 'categorie_images', 'categorie_id', 'image_id')
                    ->withTimestamps();
    }

    public function videos()
    {
        return $this->belongsToMany('App\Video', 'categorie_videos', 'categorie_id', 'video_id')
                    ->withTimestamps();
    }
}
