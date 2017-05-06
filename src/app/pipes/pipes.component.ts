import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
        <h1>{{name}}</h1>
        <h1>{{name | uppercase}}</h1>
        <h1>{{name | lowercase}}</h1>
        <h1>{{name | slice:'2'}}</h1>
        <h1>{{name | slice:'2':'4'}}</h1>
        <h1>{{ 8.564 | number:'2.5-8' }}</h1>
        <h1>{{ 8.99 | currency:'USD':true }}</h1>
        <h1>{{ date }}</h1>
        <h1>{{ date | date:'fullDate' }}</h1>
        <h1>{{ date | date:'shortDate' }}</h1>
        <h1>{{ date | date:'mediumTime' }}</h1>
        <h1>{{ date | date:'shortTime' }}</h1>
            <p>Today is {{today | date}}</p>
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  date = new Date();
  today: number = Date.now();
  name = "Normal Text";
  constructor() { }

  ngOnInit() {
  }

}
