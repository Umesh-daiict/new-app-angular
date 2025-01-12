import { Component } from "@angular/core";
import { ServersComponent } from "../servers/servers.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:"app-server",
    templateUrl:'./server.component.html',
    imports: [CommonModule],
    styles:[`
        .under {
            text-decoration: underline;
        }
        `]
})
export class ServerComponent {
    serverId=1
    serverStatus = "offine"
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'offine':'online'
    }
    getCorrectStatus(){
        return this.serverStatus
    }
}