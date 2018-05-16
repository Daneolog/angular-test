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
  @Input() text: string;
  @Input() buttonText: string;
}
