import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  showHide: boolean = false;
  show_hide() {
    this.showHide = !this.showHide;
    console.log(this.showHide);

  }
}
