<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Inertia\Inertia;


class automaticMail extends Mailable
{
    use Queueable, SerializesModels;
    public $posts;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($posts)
    {
        $this->posts = $posts;

      
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
       // return //Inertia::render('Posts.mail')
              //->with('posts', $this->posts);
        //return Inertia::render('Post.mail');
        return 
        $this->from('hello@example.com')
        ->view('mail')->with('posts', $this->posts);
    }
}
