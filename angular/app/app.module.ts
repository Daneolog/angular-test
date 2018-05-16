import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './textbutton/textbutton.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    TextButtonComponent
  ]
})
export class AppModule {}
