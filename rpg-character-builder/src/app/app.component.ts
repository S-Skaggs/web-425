import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="pageWrapper">
      <header class="banner">
        <img src="/assets/d20_45.png" alt="an image of a d20 die" />RPG Character Builder<img src="/assets/d20_45.png" alt="an image of a d20 die" />
        <div class="sign-in-container">
          @if(email) {
            <span class="sign-in-welcome">Welcome, {{ email }}!</span><br>
            <button class="sign-out-button" (click)="signout()">Sign Out</button>
          } @else {
            <a routerLink="/signin" class="sign-in-link">Sign In</a>
          }
        </div>
      </header>

      <main class="main-content">

        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="create-character">Create Character</a></li>
            <li><a routerLink="create-guild">Create Guild</a></li>
            <li><a routerLink="character-faction">Character Faction</a></li>
            <li><a routerLink="players">Players</a></li>
            <li><a routerLink="character-record-sheets">Character Record Sheets</a></li>
            <li><a routerLink="about-us">About Us</a></li>
            <li><a routerLink="contact-us">Contact Us</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
        <a routerLink="/">Home</a>
        <a routerLink="create-character">Create Character</a>
        <a routerLink="create-guild">Create Guild</a>
        <a routerLink="character-faction">Character Faction</a>
        <a routerLink="players">Players</a>
        <a routerLink="character-record-sheets">Character Record Sheets</a>
        <a routerLink="about-us">About Us</a>
        <a routerLink="contact-us">Contact Us</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .sign-in-container {
        text-align: right;
        padding-right: 10px;
        padding-top: 5px;
        color: #e0ffff;
        font-family: 'Encode Sans Semi Condensed', Verdana, Helvetica, sans-serif;
        font-size: .9rem;
        float: right;
      }

      .sign-in-link {
        color: #e0ffff;
        text-decoration: none;
      }

      .sign-in-link:hover {
        text-decoration: underline;
      }

      .sign-in-welcome {
        font-size: .8rem;
      }

      .sign-out-button {
        margin-top: 5px;
      }
    `
  ]
})
export class AppComponent {
  title = 'rpg-character-builder';
  email?: string;

  constructor(private authService: AuthService, private cookieService: CookieService){
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if(isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
    this.email = '';
  }
}
