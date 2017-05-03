import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [class.myClass]="applyClass">Angular App Component</h1>
              <h1 [style.color]="applyClass ? 'orange' : 'blue'">Apply Color</h1>
            <img [src]="src" />
            <app-tutrials></app-tutrials>
            <input type="text" value="Angular" />`,
            styles: [ 
              `.myClass{
                color: red;
              }`
            ]
})
export class AppComponent {
  public title = 'app works!';
  public src= "http://lorempixel.com/200/400";
  public applyClass = true;
}
