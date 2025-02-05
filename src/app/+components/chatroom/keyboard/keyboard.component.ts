import { Component } from '@angular/core';
import { KeyComponent } from "./key/key.component";

@Component({
  selector: 'app-keyboard',
  imports: [KeyComponent],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  isKeyboardOn=false;
  typing(){
    this.isKeyboardOn=!this.isKeyboardOn;
  }
  keys=[
    'q','w','e','r','t','y','u' ]
}
