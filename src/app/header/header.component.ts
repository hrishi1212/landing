import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'app';
}
