import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <section class="pageHeader">
        <h1>Greetings and felicitations fellow gamer!</h1>
      </section>
      <h2>Welcome to the RPG Character Builder!</h2>
      <p>
        We aim to be your go to source when it comes to generating your characters. The characters you create need not only be for Role Playing Games (RPG), but for inspiration in video games as well. You will be able to create and manage your own collection of characters.
      </p>

      <section class="highlights-container">
        <div class="highlight">
          <img src="/assets/basic_dd_sheet_300h.jpg" alt="image of a Dungeons and Dragons basic character record sheet" />
          <p class="dropCap">
            As a bonus convenance we offer PDFs of various Character Record Sheets for you to download. Do you have a record sheet that none of our current offerings will work? Contact us and we will work with you to make something available. With RPG Character Builder you will never be without a fresh character record sheet.
          </p>
          <ul>
            <li>Dungeons &amp; Dragons (Basic)</li>
            <li>Dungeons &amp; Dragons (5<sup>th</sup> Edition)</li>
            <li>Advanced Dungeons &amp; Dragons (2<sup>nd</sup> Edition)</li>
            <li>Gamma World</li>
            <li>Star Frontiers</li>
            <li>Top Secret</li>
          </ul>
        </div>

        <div class="highlight">
          <img src="/assets/playing_a_game.jpg" alt="image of people playing an rpg with dice and figures" />
          <p class="dropCap">
            Who wants to waste precious game time generating a charter for a new campaign or gaming session? No one, right? With RPG Character Builder you can create your character ahead of time. If your game master does not like that idea using RPG Character Builder can still be used to speed up character creation. Once your character is created you can print them orc if you prefer, copy them down in your own hand writing.
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/files.jpg" alt="image of magnifying glass over folders with paper in them" />
          <p class="dropCap">
            Struggling to find your character for a particular campaign or session? No need to worry, you can have a version stored with the RPG Character Builder. You will be able to print this character when needed meaning you will not be without your favorite character. Obviously you will need to keep the character up to date, but at least you will have a version of your character just a few clicks away.
          </p>
        </div>
    </section>
  `,
  styles: [
    `
      .highlights-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }

      .highlight {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }

      .highlight img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }

      .highlight p {
        margin-top: 10px;
      }

      .highlight ul {
        text-align: left;
        margin-left: 10px;
        font-size: .8em;
      }
    `
  ]
})
export class HomeComponent {

}
