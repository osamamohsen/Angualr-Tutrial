import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap'; //bootstrap

import { AppComponent } from './app.component';
import { TutrialsComponent } from './tutrials/tutrials.component';
import { TutrialPart2Component } from './tutrial-part2/tutrial-part2.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TutrialsComponent,
    TutrialPart2Component,
    ChildComponent,
    PipesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot() //bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
