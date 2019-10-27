import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceComponent } from '../service/service.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, ServiceComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
