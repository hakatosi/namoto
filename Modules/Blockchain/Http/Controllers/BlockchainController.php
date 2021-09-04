<?php

namespace Modules\Blockchain\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\View;

class BlockchainController extends Controller
{

    protected $config;

    public function __construct() {
      $this->config = require module_path('Blockchain','Config/config.php');
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
      $models = [];
      return View::make('blockchain::index', compact('models'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function payment()
    {
      $result = \Curl::to($this->config['emercoinUrl'])
        ->withOption('USERPWD', $this->config['emercoinUser'] . ':' . $this->config['emercoinPass'])
        ->asJson()
        ->get();
      if ($result) {
        //пишем в базу
        $ret = '';
        return response()->json($ret, 200, [], JSON_UNESCAPED_UNICODE);
      }
      return response()->json(['error' => true, 'message' => 'Failed to create'], 400, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function emercoin(Request $request)
    {
        $data = $request->all();
        if (!isset($data['method']) || !$data['method']) {
          return response()->json(['error' => true, 'message' => 'Not parameters'], 400, [], JSON_UNESCAPED_UNICODE);
        }
        $command = trim(strip_tags($data['method']));
        $data = [
          'method' => $command,
          'params' => $data['params']
        ];

        $ret = \Curl::to($this->config['emercoinUrl'])
          ->withOption('USERPWD', $this->config['emercoinUser'] . ':' . $this->config['emercoinPass'])
          ->asJson()
          ->withData($data)
          ->post();
        return response()->json($ret, 200, [], JSON_UNESCAPED_UNICODE);
    }


}
