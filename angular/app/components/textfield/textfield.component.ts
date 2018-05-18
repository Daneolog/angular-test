import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
    selector: 'textfield',
    styleUrls: ['textfield.component.scss'],
    templateUrl: 'textfield.component.html'
  })
  export class MyTextfieldComponent {
    @Input() text: string;
    @Input() fname: string;
    @Input() lname: string;
    @Input() ftext: string;
    @Input() ltext: string;
  }