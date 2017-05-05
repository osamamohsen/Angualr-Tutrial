import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutrials',
  template: `
            <h1 class="style">WELCOME</h1>
            <p *ngIf="showElement">Show Element</p>
            <div [ngSwitch]="color">
              <p *ngSwitchCase="'red'">Red is Show</p>
              <p *ngSwitchCase="'blue'">Blue is Show</p>
              <p *ngSwitchDefault>Invalid Color</p>
            </div>
            <ul>
              <li *ngFor="let color of colors">{{color}}</li>
            </ul>
            <button (click)="ClickMe($event)">ClickMe</button>
            <input type="text" #demoInput />
            <br/>
            <h1>Data Binding</h1>
            <input type="text" [(ngModel)]="fname"/><br/>
            <input type="text" [(ngModel)]="lname"/><br/>
            <h4>{{fname}} {{lname}}</h4>
  `,
  styleUrls: ['./tutrials.component.css']
})
export class TutrialsComponent implements OnInit {

  public fname;
  public lname;
  public showElement = true;
  public color = 'blue';
  public colors = ['red','blue','green'];
  constructor() { }

  ClickMe(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
