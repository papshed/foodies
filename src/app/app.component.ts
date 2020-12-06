import {DOCUMENT} from '@angular/common';
import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Foodies';

  constructor() { }
}
