import { Component, Input } from '@angular/core';

@Component({
  selector: 'textbutton',
  styleUrls: ['textbutton.component.scss'],
  template: `
    {{ text }}
    <button>{{ buttonText }}</button>
  `
})
export class TextButtonComponent {
  mytext: string;
  @Input() text: string;
  @Input() buttonText: string;

  constructor() {
    this.mytext = "hi";
  }
}
