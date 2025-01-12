import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  imports: [ServerComponent, FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  isAllowToAddServer = false
  serverCreationStatus = ""
  serverName = "Hi"
  constructor(){
    setTimeout(()=>{
      this.isAllowToAddServer = true
    },800)
  }
  createTheServer(){
    this.serverCreationStatus = "Server Is created, Name is " + this.serverName 
  }
  addServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
