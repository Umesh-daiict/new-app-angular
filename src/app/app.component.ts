import { Component } from '@angular/core';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  imports: [ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
