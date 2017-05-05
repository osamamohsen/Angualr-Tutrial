import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutrial-part2',
  template: `
          <p [ngClass]="{classOne:cone,classTwo:ctwo}">ngClass Paragrahp</p>
          <button (click)="toggle()">Toggle</button>
          <p [ngStyle]="{'font-style':font_style,'font-size':font_size}">ngStyle Paragraph</p>
  `,
  styles: [`.classOne{color:orange}
            .classTwo{background-color:black}`]
})
export class TutrialPart2Component implements OnInit {

  public cone = true;
  public ctwo = true;
  public font_size  = '40px';
  public font_style = 'italic';

  constructor() { }

  toggle(){
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
  ngOnInit() {
  }

}
