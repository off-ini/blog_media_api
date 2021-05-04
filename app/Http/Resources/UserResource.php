<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
        $birth = date('d M Y', strtotime($this->birth));
        $flag = ['DISABLE', 'ENABLE'];
        $type = ['ADMIN', 'USER', 'VIEWER'];
        return [
            'id' => $this->id,
            'name' => $this->name,
            'birth' => $birth,
            'birth_date' => $this->birth,
            'sexe' => $this->sexe == 'H' ? 'Homme' : 'Femme',
            'email' => $this->email,
            'phone' => $this->phone,
            'flag' => $flag[$this->flag == true ? 1 : 0],
            'type' => $type[$this->type],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
