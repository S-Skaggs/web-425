import { Component, Input } from '@angular/core';
import { Character, Roster } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="roster-container">
      <h1>Character Roster</h1>
      @if(this.roster.characters.length > 0) {
        <section class="character-roster">
          @for (character of this.roster.characters; track character) {
            <div class="character-display">
              <p>Name: {{ character.name }}</p>
              <p>Gender: {{ character.gender }}</p>
              <p>Class {{ character.class }}</p>
              <div class="rosterCharacterId">roster: {{ this.roster.rosterId }} character: {{ character.id }}</div>
            </div>
          }
        </section>
      } @else {
        <p>No characters to display.</p>
      }
    </div>
  `,
  styles: `
    .character-roster {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }

      .character-display {
        border: 4px double #228b22;
        border-radius: 8px;
        background-color: #f5f5f5;
        padding: 0 5px 5px;
        text-align: left;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }

      .rosterCharacterId {
        font-size: .6rem;
      }
  `
})
export class CharacterListComponent {
  @Input() roster!: Roster;
}
