import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styles: [`
    input.ng-valid {border-left: 5px solid green;}
    input.ng-invalid {border-left: 5px solid red;}
  `]
})
export class Form2Component implements OnInit {

userForm: FormGroup;
/*
  userForm = new FormGroup({
    name: new FormControl("start",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    address: new FormGroup({
      street: new FormControl,
      city: new FormControl(),
      postalCode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
    })
  }); 
  */
  constructor(private _formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['Default Value',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      email: [null,[Validators.required,Validators.email]],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalCode: [null,Validators.pattern('^[1-9][0-9]{4}$')]
      })
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
