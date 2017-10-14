import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaypointComponentComponent } from './waypoint-component/waypoint-component.component';


@NgModule({
  declarations: [
    AppComponent,
    WaypointComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
