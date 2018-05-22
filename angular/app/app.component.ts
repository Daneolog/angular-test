import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <nav>
      <a *ngFor="let item of nav" [routerLink]="item.link" routerLinkActive="active">{{ item.name }}</a>
    </nav>
    <div style="height: 100%; margin:41px 0 0 0">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav=[
    { link: 'home', name: 'Home', exact: false },
    { link: 'pics', name: 'Pics', exact: false },
  ]
}