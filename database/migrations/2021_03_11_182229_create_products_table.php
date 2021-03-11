<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{

     private $PRODUCTS = array(
        array(
                'name' => 'SINGLE',
                'description' => 'Jednorázové generovanie dokumentov pre registrovaný pracovný úraz.',
                'price' => 1,
                'credits' => 1,
                'valid' => true
            ),array(
                'name' => '10',
                'description' => 'Možnosť generovanie dokumentov pre 10 registrovaných pracovných úrazov. Vhodný pre stredné a malé podniky.',
                'price' => 8,
                'credits' => 10,
                'valid' => true
            ),array(
                'name' => 'UNLIMITED',
                'description' => 'Neobmedzené množstvo generovaných dokumentov. Produkt určený pre veľké podniky.',
                'price' => 99.89,
                'credits' => 1000,
                'valid' => true
            ));

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('description');
            $table->double('price');
            $table->integer('credits');
            $table->boolean('valid')->default(true);
        });

        $this->populateProducts();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }

    private function populateProducts(){
        // Insert
        DB::table('products')->insert($this->PRODUCTS);
    }
}
