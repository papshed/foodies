import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profile: string | null = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => this.profile = JSON.stringify(profile, null, 2)
    );
  }
}
