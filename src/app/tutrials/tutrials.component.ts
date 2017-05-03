import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutrials',
  template: `
            <h1 class="style">WELCOME</h1>
            <button (click)="ClickMe($event)">ClickMe</button>
            <input type="text" #demoInput />
  
  `,
  styleUrls: ['./tutrials.component.css']
})
export class TutrialsComponent implements OnInit {

  constructor() { }

  ClickMe(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
