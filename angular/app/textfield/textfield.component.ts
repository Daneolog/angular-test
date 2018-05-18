import { Component, Input } from '@angular/core';

@Component({
    selector: 'textfield',
    styleUrls: ['textfield.component.scss'],
    templateUrl: 'textfield.component.html'
  })
  export class MyTextfieldComponent {
    @Input() text: string;
    @Input() fname: string;
    @Input() lname: string;
  }