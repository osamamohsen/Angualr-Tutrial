import { Component } from '@angular/core';
            // <app-tutrials></app-tutrials>
            // <app-child></app-child>
            // <app-tutrial-part2></app-tutrial-part2>
            // <app-pipes></app-pipes>
// <h1 [class.myClass]="applyClass">Angular App Component</h1>
//               <h1 [style.color]="applyClass ? 'orange' : 'blue'">Apply Color</h1>
//             <img [src]="src" />
//             <input type="text" value="Angular" />
@Component({
  selector: 'app-root',
  template: `
            <app-form2></app-form2>
              `,
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
  ngOnInit(){
    console.log("ASD Component");
  }
}
