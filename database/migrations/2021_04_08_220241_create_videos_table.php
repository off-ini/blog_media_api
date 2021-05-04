<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('title')->nullable();
            $table->string('url');
            $table->string('thumnail')->nullable();
            $table->integer('view')->default(0);
            $table->integer('like')->default(0);
            $table->integer('unlike')->default(0);
            $table->string('duration')->nullable();
            $table->double('size')->nullable();
            $table->double('height')->nullable();
            $table->double('width')->nullable();
            $table->boolean('flag')->default(true);
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
        Schema::dropIfExists('videos');
    }
}
