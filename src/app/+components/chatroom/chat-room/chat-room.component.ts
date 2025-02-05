import { Component } from '@angular/core';
import { FriendprofileComponent } from '../friendprofile/friendprofile.component';
import { Keyboard2Component } from './keyboard2/keyboard2.component';

@Component({
  selector: 'app-chat-room',
  imports: [FriendprofileComponent, Keyboard2Component],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {

}
