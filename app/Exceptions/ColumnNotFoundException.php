<?php

namespace App\Exceptions;

use Exception;

class ColumnNotFoundException extends Exception
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function render($request)
    {
        if ($request->ajax() || $request->isJson() || $request->wantsJson()) {
            return response()->json([
                'message' => $this->getMessage()
            ], $this->getCode(), [], JSON_UNESCAPED_UNICODE);
        }
    }
}
