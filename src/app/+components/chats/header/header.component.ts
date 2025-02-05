import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showHide: boolean = false;
  show_hide() {
    this.showHide = !this.showHide;
    console.log(this.showHide);

  }
}
