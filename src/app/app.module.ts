import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutrialsComponent } from './tutrials/tutrials.component';
import { TutrialPart2Component } from './tutrial-part2/tutrial-part2.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TutrialsComponent,
    TutrialPart2Component,
    ChildComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
