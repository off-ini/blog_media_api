<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('title')->nullable();
            $table->string('url');
            $table->integer('view')->default(0);
            $table->integer('like')->default(0);
            $table->integer('unlike')->default(0);
            $table->double('size')->nullable();
            $table->double('height')->nullable();
            $table->double('width')->nullable();
            $table->boolean('flag')->default(true);
            $table->bigInteger('album_id')->unsigned()->nullable();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
