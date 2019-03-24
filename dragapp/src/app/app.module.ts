import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';
import { HttpClient } from 'selenium-webdriver/http';
import { VirtualComponent } from './virtual/virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    PaisesComponent,
    VirtualComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
