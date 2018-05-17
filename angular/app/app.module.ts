import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './textbutton/textbutton.component'
import { MyListComponent } from './mylist/mylist.component'
import { CheckTextComponent } from './checktext/checktext.component'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    TextButtonComponent,
    MyListComponent,
    CheckTextComponent
  ]
})
export class AppModule {}
