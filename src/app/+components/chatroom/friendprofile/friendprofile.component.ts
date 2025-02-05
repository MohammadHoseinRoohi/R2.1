import { Component } from '@angular/core';

@Component({
  selector: 'app-friendprofile',
  imports: [],
  templateUrl: './friendprofile.component.html',
  styleUrl: './friendprofile.component.css'
})
export class FriendprofileComponent {
  openprofile: boolean = true;
  name='sahel rahimof';
  profile() {
    this.openprofile = !this.openprofile;
  }
  openchat:boolean=false;
  newchat(){
    this.openchat=!this.openchat;
  }
}
