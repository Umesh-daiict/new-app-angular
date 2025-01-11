import { Component } from '@angular/core';
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";

@Component({
  selector: 'app-root',
  imports: [SuccessAlertComponent, WarningAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
