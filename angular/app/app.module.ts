import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './textbutton/textbutton.component'
import { MyListComponent } from './mylist/mylist.component'
import { MyTextfieldComponent } from './textfield/textfield.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    TextButtonComponent,
    MyListComponent,
    MyTextfieldComponent
  ]
})
export class AppModule {}
