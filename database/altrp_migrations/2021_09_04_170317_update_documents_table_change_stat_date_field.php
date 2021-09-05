<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateDocumentsTableChangeStatDateField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ('stat_date' !== 'stat_date') {
            Schema::table('documents', function (Blueprint $table) {
                $table->renameColumn('stat_date', 'stat_date');
            });
        }

        Schema::table('documents', function (Blueprint $table) {
            $table->date('stat_date')->change();
            
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
