<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
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
        $images = $this->images;
        $thumnail = count($images) >= 1 ? $this->images[0]->url : null;
        return [
            'id' => $this->id,
            'code' => $this->code,
            'title' => $this->title,
            'thumnail' => $thumnail,
            'images' => ImageResource::collection($images),
            'user' => new UserResource($this->user),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
