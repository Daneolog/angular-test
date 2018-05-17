import { Component, Input } from '@angular/core';

@Component({
  selector: 'mylist',
  styleUrls: ['mylist.component.scss'],
  template: `
    <table>
      <tr><th colspan=2><ng-content></ng-content></th></tr>
      <tr *ngFor="let item of data">
        <td><a [href]="item.target">{{ item.text | uppercase }}</a></td>
        <td>{{ item.target }}</td>
      </tr>
    </table>
  `
})
export class MyListComponent {
  @Input() data: any[];
}
