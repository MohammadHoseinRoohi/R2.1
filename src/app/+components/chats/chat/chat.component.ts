import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-chat',
  imports: [HeaderComponent],
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
