import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'textbutton',
  styleUrls: ['textbutton.component.scss'],
  template: `
    {{ text }}
    <button (click)="click()">{{ buttonText }}</button>
  `
})
export class TextButtonComponent {
  @Input() text: string;
  @Input() buttonText: string;

  // this must not be called click (cuz components have a (click) event
  // preset).  if you call it click it'll call both the default event
  // and this emitter
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  click() {
    console.log("called");
    this.clicked.emit(new Date());
  }
}
