import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key',
  imports: [],
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent {
  @Input() key:any;
}
