import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="pageWrapper">
      <header class="banner">
        <img src="/assets/d20_45.png" alt="an image of a d20 die" />RPG Character Builder<img src="/assets/d20_45.png" alt="an image of a d20 die" />
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
            <li><a routerLink="signin">Sign In</a></li>
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
        <a routerLink="signin">Sign In</a>
        <a routerLink="about-us">About Us</a>
        <a routerLink="contact-us">Contact Us</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
