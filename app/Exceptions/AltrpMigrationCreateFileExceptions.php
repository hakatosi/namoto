<?php

namespace App\Exceptions;

use Exception;

class AltrpMigrationCreateFileExceptions extends Exception
{
    /**
     * Render the exception as an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        dd($request);
        return response()->json([
            "message" => $this->getMessage()
        ], 500, [],JSON_UNESCAPED_UNICODE);
    }
}
