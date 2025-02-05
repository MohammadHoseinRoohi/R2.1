import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from "./+components/chats/chat/chat.component";
import { ChatRoomComponent } from "./+components/chatroom/chat-room/chat-room.component";
import { HeaderComponent } from "./+components/chats/header/header.component";

@Component({
  selector: 'app-root',
  imports: [ChatComponent, ChatRoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
}
