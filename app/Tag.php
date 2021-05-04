<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $guarded  = [
        'id'
    ];

    public function images()
    {
        return $this->belongsToMany('App\Image', 'image_tags', 'image_id', 'tag_id')
                    ->withTimestamps();
    }

    public function videos()
    {
        return $this->belongsToMany('App\Video', 'video_tags', 'tag_id', 'video_id')
                    ->withTimestamps();
    }
}
