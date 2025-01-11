import { Component } from "@angular/core";
import { ServersComponent } from "../servers/servers.component";

@Component({
    selector:"app-server",
    templateUrl:'./server.component.html',
    imports: [ServersComponent],
    styles:[`
        h2{
            color: green
        }
        `]
})
export class ServerComponent {

}