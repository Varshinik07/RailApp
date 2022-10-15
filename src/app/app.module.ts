import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallTrainsComponent } from './viewall-trains/viewall-trains.component';
import{HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
