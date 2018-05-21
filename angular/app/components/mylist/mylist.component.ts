import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'mylist',
  styleUrls: ['mylist.component.scss'],
  template: `
    <table>
      <tr><th colspan="3"><ng-content></ng-content></th></tr>
      <tr *ngFor="let item of data">
        <td><a [href]="item.url">{{ item.name | uppercase }}</a></td>
        <td>{{ item.url }}</td>
        <td><button (click)="click(item.id)">Edit</button></td>
      </tr>
    </table>
  `
})
export class MyListComponent {
  @Input() data: any[];
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  click(index: number) {
    this.clicked.emit(index);
  }
}
