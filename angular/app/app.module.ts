import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { ComponentModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ComponentModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DataService
  ]
})
export class AppModule {}
