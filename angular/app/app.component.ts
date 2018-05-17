import { Component } from '@angular/core';
import { MyListComponent } from './mylist/mylist.component'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Data {
  text: string;
  target: string;

  constructor(text: string, target: string) {
    this.text = text;
    this.target = target;
  }
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  item: number = 3
  url: string = "http://www.google.com"
  data: any[];
  counter: number = 0;

  constructor() {
    this.data = [{text: "numero uno", target: "http://google.com"},
                 {text: "numero due", target: "http://yahoo.com"},
                 {text: "numero tre", target: "https://duckduckgo.com/"},
                 {text: "numero quattro", target: "https://bing.com/"}];
    // this.data = [new Data("numero uno", "http://google.com"), 
    //              new Data("numero due", "http://yahoo.com"),
    //              new Data("numero tre", "https://duckduckgo.com/"),
    //              new Data("numero quattro", "https://bing.com/")];
  }

  click() {
    this.counter++;
  }
}
