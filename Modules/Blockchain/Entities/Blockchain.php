<?php


namespace Modules\Blockchain\Entities;


use App\User;
use Illuminate\Support\Facades\Hash;

class Blockchain
{

  public $value;

  protected $owner_id;

  public function __construct()
  {
    $this->value = '';
    $this->owner_id = 2;
  }

  public function userSignature() {
    $user_id = auth()->user()->id;
    $user = \DB::table('users')->where('id', $user_id)->first();
    return $user->signature;
  }

  public function ownerSignature() {
    $user = \DB::table('users')->where('id', $this->owner_id)->first();
    return $user->signature;
  }

  public function registerRoom($room_id, $sigature = false) {
    $currentRoom = \DB::table('rooms')
      ->select('rooms.*', 'room_types.name as type')
      ->join('room_types', 'room_types.id', '=', 'rooms.type_id')
      ->where( 'rooms.id', intval($room_id) )
      ->first();
    if( ! $currentRoom ){
      return ['success'=>false, 'message'=>'Not find room'];
    }
    $this->value .= 'dpo:sher:'. \Str::slug($currentRoom->name).$currentRoom->id.':0';
    if ($sigature) {
      $this->value .=  "\n";
      $this->value .= 'NAME=' . $currentRoom->name . "\n";
      $this->value .= 'SQUARE=' . $currentRoom->square . 'm²' . "\n";
      $this->value .= 'ROOM_TYPE=' . $currentRoom->type . "\n";
      $this->value .= 'AMOUNT=' . $currentRoom->amount . '$' . "\n";
    }

    return ['success' => $this->value];
  }

  public function registerUser($user_id) {
    $currentUser = \DB::table('users')
      ->where( 'id', intval($user_id) )
      ->first();
    if( ! $currentUser ){
      return ['success'=>false, 'message'=>'Not find user'];
    }
    //$this->value .= 'id:'. \Str::slug($currentUser->name).$currentUser->id.':0' . "\n";
    $this->value .= 'NAME=' . $currentUser->name . "\n";
    $this->value .= 'INN=' . $currentUser->inn . "\n";
    $this->value .= 'KPP=' . $currentUser->kpp . "\n";


    return ['success' => $this->value];
  }

  public function registerDocument($document_id, $sigature = false) {
    $currentDoc = \DB::table('rooms')
      ->where( 'id', intval($document_id) )
      ->first();
    if( ! $currentDoc ){
      return ['success'=>false, 'message'=>'Not find room'];
    }
    $currentRoom = \DB::table('rooms')
      ->select('rooms.*', 'room_types.name as type')
      ->join('room_types', 'room_types.id', '=', 'rooms.type_id')
      ->where( 'id', $currentDoc->room_id )
      ->first();
    if( ! $currentRoom ){
      return ['success'=>false, 'message'=>'Not find room'];
    }
    $name = 'dpo:sher:'. \Str::slug($currentRoom->name).$currentRoom->id . '-'. \Str::slug($currentDoc->name).$currentDoc->id.':0';
    if ($sigature) {
      $this->value .= $name . '|';
      $this->value .= 'F-OBJECT= dpo:sher:'. \Str::slug($currentRoom->name).$currentRoom->id . ':0' . "|";
      $this->value .= 'F-FROM=' . date('d.m.Y', strtotime($currentDoc->start_date)) . "|";
      $this->value .= 'F-TO=' . date('d.m.Y', strtotime($currentDoc->end_date));
    } else {
      $this->value .= $name;
    }


    return ['success' => $this->value];
  }


  public function payment() {

  }

}
