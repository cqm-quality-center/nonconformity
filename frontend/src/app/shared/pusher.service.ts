import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})

export class PusherService {
    pusher: any;
    messagesChannel: any;

    constructor() {
        // replace xxxx's with your Pusher application key
        this.pusher = new Pusher(environment.pusher.key, {
            authEndpoint: 'http://localhost:3000/pusher/auth',
          });
        this.messagesChannel = this.pusher.subscribe('private-messages');
    }

}