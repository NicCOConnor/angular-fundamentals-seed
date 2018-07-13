import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <button (click)="handleClick()">
      Change Name
    </button>
    <input type="text" 
    [value]="name" 
    (blur)="handleBlur($event)"
    (input)="handleInput($event)">
    <div>{{name}}</div>
  </div>
  `
})
export class AppComponent {
  title: string;
  name:string =  "Nic";
  logo: string = 'img/logo.svg';
  constructor() {
    this.title = 'Ultimate Angular'
  }

  handleClick() {
    this.name = "Nic"
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
}