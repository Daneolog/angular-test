import { CommonModule } from '@angular/common';

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
  thingy: Date = new Date();
  src: string = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85"
  style: any;

  checked: boolean;

  constructor() {
    this.data = [{text: "numero uno", target: "http://google.com"},
                 {text: "numero due", target: "http://yahoo.com"},
                 {text: "numero tre", target: "https://duckduckgo.com/"},
                 {text: "numero quattro", target: "https://bing.com/"}];
    // this.data = [new Data("numero uno", "http://google.com"), 
    //              new Data("numero due", "http://yahoo.com"),
    //              new Data("numero tre", "https://duckduckgo.com/"),
    //              new Data("numero quattro", "https://bing.com/")];

    this.style = {
      'filter': 'brightness(50%)'
    };
  }

  click(event: any) {
    this.thingy = event;
  }

  check(event: any) {
    this.checked = event;
  }
}
