// Interface to represent a user object
export interface User {
  userId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(private cookieService: CookieService, private router: Router) {
    this.users = [
      { userId: 90125, email: 'yes@music.com', password: 'LeaveIt_1984' },
      { userId: 1984, email: 'van.halen@music.com', password: '19Panama84' },
      { userId: 2112, email: 'rush@hogwarts.com', password: '67ZoneTwilight91' },
      { userId: 1010, email: 'prince@hogwarts.com', password: 'Delirious1983' }
    ];
  }

  // Method to return the authState (authentication sate)
  getAuthState() {
    return this.authState.asObservable();
  }

  // Method to sign the user into the website
  signin(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);

    if(user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }
  // Method to sing the user out of the website
  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
