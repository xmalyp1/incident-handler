<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceCompaniesTable extends Migration
{

    private $INSURANCE_COMPANIES = array(
        array(
            'name' => 'Všeobecná zdravotná poisťovňa'
        ),array(
            'name' => 'UNION'
        ),array(
            'name' => 'Dôvera'
        ));

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_companies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->nullable(false);
        });

        $this->populateInsurerCompanies();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insurance_companies');
    }

    private function populateInsurerCompanies(){
        // Insert
        DB::table('insurance_companies')->insert($this->INSURANCE_COMPANIES);
    }
}
