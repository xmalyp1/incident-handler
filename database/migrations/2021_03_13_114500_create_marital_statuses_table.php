<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaritalStatusesTable extends Migration
{
    private $MARITAL_STATUSES = array(
        array(
            'status' => 'slobodný',
            'gender' => 'MALE'
        ),array(
            'status' => 'ženatý',
            'gender' => 'MALE'
        ),array(
            'status' => 'rozvedený',
            'gender' => 'MALE'
        ),array(
            'status' => 'vdovec',
            'gender' => 'MALE'
        ),array(
            'status' => 'slobodná',
            'gender' => 'FEMALE'
        ),array(
            'status' => 'vydatá',
            'gender' => 'FEMALE'
        ),array(
            'status' => 'rozvedená',
            'gender' => 'FEMALE'
        ),array(
            'status' => 'vdova',
            'gender' => 'FEMALE'
        ));


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marital_statuses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('status')->nullable(false);
            $table->string('gender')->nullable(false);
        });

        $this->populate();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marital_statuses');
    }
    private function populate(){
        // Insert
        DB::table('marital_statuses')->insert($this->MARITAL_STATUSES);
    }
}
