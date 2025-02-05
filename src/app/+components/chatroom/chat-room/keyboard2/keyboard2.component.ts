import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyboard2',
  imports: [FormsModule,],
  templateUrl: './keyboard2.component.html',
  styleUrl: './keyboard2.component.css'
})
export class Keyboard2Component {
  usertyped=" ";
  texts: any;
  current: any="";
  iskeyboardvisible: boolean = false;
  showkeyboard() {
    this.iskeyboardvisible = !this.iskeyboardvisible;
  }
  sentence(s: string) {
    this.current = this.current + s;
  }
  isbuttonsvisible: boolean = true;
  shownewbuttons() {
    this.isbuttonsvisible = !this.isbuttonsvisible;
  }
  isthemelight: boolean = true;
  change: string = "🌞";
  themes() {
    this.isthemelight = !this.isthemelight;
    if (this.isthemelight == true) {
      this.change = "🌞";
    } else {
      this.change = "🌜";
    }

  }
  isemojeOn: boolean = false;
  emoje() {

  }
  backspace() {
    let del = this.current;
    del = del.substring(0, del.length - 1);
    if (del == del.substring(1)) {
      this.current = '';
    }
    else {
      this.current = del;
    }
    // this.current = this.current - b;
    // this.current = "";
    // // this.current=this.current+"";
  }
}
