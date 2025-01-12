import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servers',
  imports: [ServerComponent, FormsModule, CommonModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  isAllowToAddServer = false
  serverCreationStatus = "offine"
  isAdded = false
  serverName = "Hi"
  servers: string[] = []
  constructor(){
    setTimeout(()=>{
      this.isAllowToAddServer = true
    },800)
  }
  createTheServer(){
    this.isAdded = true
    this.serverCreationStatus = "New server created... " + this.serverName 
    this.servers=[...this.servers,this.serverName]
  }
  addServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
