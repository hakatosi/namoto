<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateDocumentsTableChangeEndDateField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ('end_date' !== 'end_date') {
            Schema::table('documents', function (Blueprint $table) {
                $table->renameColumn('end_date', 'end_date');
            });
        }

        Schema::table('documents', function (Blueprint $table) {
            $table->date('end_date')->change();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('documents', function (Blueprint $table) {

        });
    }
}
