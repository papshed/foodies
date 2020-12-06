import {DOCUMENT} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {faPowerOff, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar-profile',
  templateUrl: './nav-bar-profile.component.html',
  styleUrls: ['./nav-bar-profile.component.scss']
})
export class NavBarProfileComponent {

  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({returnTo: this.doc.location.origin});
  }
}
