<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VideoLike extends Model
{
    protected $guarded  = [
        'id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function video()
    {
        return $this->belongsTo('App\Video', 'video_id');
    }
}
