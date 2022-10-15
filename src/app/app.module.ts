import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallTrainsComponent } from './viewall-trains/viewall-trains.component';


const appRoutes:Routes=[
  {
    path:"",component: ViewallTrainsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewallTrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
