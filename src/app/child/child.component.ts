import { Component, OnInit , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h1>Child Template</h1>
  <p>Parent Data Will Print Here</p>
  <h3>{{parentData}}</h3>
  <input type="text" #childText (keyup)="onChange(childText.value)" />
  `,
  styleUrls: ['./child.component.css'],
  inputs:['parentData'],
  outputs:['childEvent']
})
export class ChildComponent implements OnInit {

  public parentData: string;

  childEvent = new EventEmitter<string>();
  
  onChange(value: string){
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
