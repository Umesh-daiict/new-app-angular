import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showData = false
  clicksAt : string[]= []
  handleShowDetails(){
    this.clicksAt.push(new Date().toTimeString())
    this.showData = true
  }
}
