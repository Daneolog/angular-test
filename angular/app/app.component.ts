import { Component } from '@angular/core';
import { MyListComponent, Data } from './mylist/mylist.component'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  item: number
  url: string
  data: Data[];

  constructor() {
    this.item = 3
    this.url = "http://www.google.com"

    this.data = [new Data("numero uno", "http://google.com"), 
                 new Data("numero due", "http://yahoo.com"),
                 new Data("numero tre", "https://duckduckgo.com/"),
                 new Data("numero quattro", "https://bing.com/")];
  }
}
