<?php

namespace App\Http\Resources;

use App\ImageLike;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    public $preserveKeys = true;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tags = [];
        $categories =[];
        foreach ($this->categories as $value) {
           $categories[] = $value->label;
        }

        foreach ($this->tags as $value) {
            $tags[] = $value->label;
        }

        $likes = ImageLike::where(['image_id' => $this->id, 'has_liked' => true])->get()->count();
        $unlikes = ImageLike::where(['image_id' => $this->id, 'has_liked' => false])->get()->count();
        $views = $this->viwes ? count($this->viwes) : 0;


        return [
            'id' => $this->id,
            'code' => $this->code,
            'title' => $this->title,
            'url' => $this->url,
            'view' => $views,
            'like' => $likes,
            'unlike' => $unlikes,
            'size' => $this->size,
            'height' => $this->height,
            'width' => $this->width,
            'flag' => $this->flag,
            'album_id' => $this->album_id,
            'categories' => CategorieResource::collection($this->categories),
            'tags' => TagResource::collection($this->tags),
            'cat_labels' => $categories,
            'tag_labels' => $tags,
            'user' => new UserResource($this->user),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
