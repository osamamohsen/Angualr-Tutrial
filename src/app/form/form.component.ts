import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styles: [`
            input.ng-invalid{border-left: 5px solid red;}
            input.ng-valid{border-left: 5px solid green;}            
            `]
})
export class FormComponent implements OnInit {

  name: string;
  constructor() { 
    this.name = "Mac Jones";
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(this.name);
    console.log(form.value);
  }
}
