import { Component, OnInit } from '@angular/core';
import { TextButtonComponent } from './textbutton/textbutton.component'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  item: number
  url: string

  hi: string
  buttonText: string

  constructor() {
    this.item = 3
    this.url = "http://www.google.com"
  }

  ngOnInit() {
    this.hi = "hello"
    this.buttonText = "buttontexjtaeoi"
  }
}
