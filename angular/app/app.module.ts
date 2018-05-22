import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ComponentModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { PicsComponent } from './containers/pics/pics.component';
import { NotFoundComponent } from './containers/not-found/nf.component';

import { DataService } from './services/data.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pics', component: PicsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ComponentModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PicsComponent,
    NotFoundComponent
  ],
  providers: [
    DataService
  ]
})
export class AppModule {}
