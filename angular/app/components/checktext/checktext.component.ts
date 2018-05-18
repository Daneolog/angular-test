import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'checktext',
  styleUrls: ['checktext.component.scss'],
  template: `
    <input type="checkbox" (click)="click()" [(checked)]="checked">
    <ng-content></ng-content>
  `
})
export class CheckTextComponent {
  // this must not be called click (cuz components have a (click) event
  // preset).  if you call it click it'll call both the default event
  // and this emitter
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  checked: boolean = false;

  click() {
    this.checked = !this.checked;
    this.clicked.emit(this.checked);
  }
}
