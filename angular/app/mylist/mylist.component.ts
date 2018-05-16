import { Component, Input } from '@angular/core';

export class Data {
  text: string;
  target: string;

  constructor(text: string, target: string) {
    this.text = text;
    this.target = target;
  }
}

@Component({
  selector: 'mylist',
  styleUrls: ['mylist.component.scss'],
  template: `
    <ul>
      <li *ngFor="let item of data;"><a [href]=item.target>{{ item.text | uppercase }}</a></li>
    </ul>
  `
})
export class MyListComponent {
  @Input() data: any[];
}
