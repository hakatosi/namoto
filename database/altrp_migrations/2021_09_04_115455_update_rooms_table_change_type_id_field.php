<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateRoomsTableChangeTypeIdField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ('type_id' !== 'type_id') {
            Schema::table('rooms', function (Blueprint $table) {
                $table->renameColumn('type_id', 'type_id');
            });
        }

        Schema::table('rooms', function (Blueprint $table) {
            $table->integer('type_id')->unsigned()->change();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rooms', function (Blueprint $table) {

        });
    }
}
