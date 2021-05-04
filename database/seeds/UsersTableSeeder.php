<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Infini',
            'email' => 'infini@gmail.com',
            'sexe' => 'H',
            'birth' => '1999-12-26',
            'phone' => '0000000000',
            'password' => Hash::make("12345678"),
        ]);
    }
}
