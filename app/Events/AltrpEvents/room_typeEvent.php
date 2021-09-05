<?php

namespace App\Events\AltrpEvents;

use App\AltrpModels\room_type;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class room_typeEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $room_type;

    /**
     * Create a new event instance.
     *
     * @param room_type $room_type
     * @return void
     */
    public function __construct(room_type $room_type)
    {
        $this->room_type = $room_type;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("altrpchannel.room_type");
    }
}
