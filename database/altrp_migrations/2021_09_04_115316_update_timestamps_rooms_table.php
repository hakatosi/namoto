<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateTimestampsRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (1 && (!Schema::hasColumn('rooms', 'created_at')
          && !Schema::hasColumn('rooms', 'updated_at'))) {
            Schema::table('rooms', function (Blueprint $table) {
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
        } else {
            if (!1 && Schema::hasColumn('rooms', 'created_at') && Schema::hasColumn('rooms', 'updated_at')) {
                Schema::table('rooms', function (Blueprint $table) {
                    $table->dropTimestamps();
                });
            }
        }

        if (false && !Schema::hasColumn('rooms', 'deleted_at')) {
            Schema::table('rooms', function (Blueprint $table) {
                $table->softDeletes();
            });
        } else {
            if (!false && Schema::hasColumn('rooms', 'deleted_at')) {
                Schema::table('rooms', function (Blueprint $table) {
                    $table->dropSoftDeletes();
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (1) {
            Schema::table('rooms', function (Blueprint $table) {
                $table->dropTimestamps();
            });
        }
        if (false) {
            Schema::table('rooms', function (Blueprint $table) {
                $table->dropSoftDeletes();
            });
        }
    }
}
