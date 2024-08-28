export interface CharacterSummaryObject {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>List of Players</h1>
      <p class="dropCap">This is our current list of players. Have a look around and see if there is one you like.</p>

      <ul class="characterlist-container">
        @for (character of characterList; track character) {
          <li class="characterlist-character">
            <div class="characterlist-card">
              <h3>{{ character.name }}</h3>
              <p>{{ character.faction }}</p>
              <p>{{ character.gender }} {{ character.class }}</p>
              <p>{{ character.funFact }}</p>
              <p>Starting Location is {{ character.startingLocation }}</p>
            </div>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .characterlist-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }

      .characterlist-character {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(160, 32, 240,0.4);
      }

      .characterlist-card {
        padding: 20px;
        background-image: linear-gradient(#4682b4, #ffd700);
      }
    `
  ]
})
export class PlayersComponent {
  characterList: CharacterSummaryObject[];

  constructor() {
    this.characterList = [
      {
        "name": "Egbert the Invincible",
        "gender": "Male",
        "class": "Warrior",
        "faction": "The Adventurer's Guild",
        "startingLocation": "The Keep on the Borderlands",
        "funFact": "While not a skilled warrior Egbert is extremely lucky"
      },
      {
        "name": "Grace Hopper",
        "gender": "Female",
        "class": "Mage",
        "faction": "The Sorceress Collective",
        "startingLocation": "HMS Murray",
        "funFact": "A mage and a skilled sailor ready for adventure"
      },
      {
        "name": "Pat Felix",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Cat's Paw Association",
        "startingLocation": "The Green Dragon Inn",
        "funFact": "Once stole the nose ring of a living minotaur"
      },
      {
        "name": "Lewis Silverman",
        "gender": "Male",
        "class": "Mage",
        "faction": "The Senior Society",
        "startingLocation": "The Ivory Tower",
        "funFact": "Specializes in summoning barriers"
      },
      {
        "name": "France Dugal",
        "gender": "Female",
        "class": "Rogue",
        "faction": "The Lethal Ladies",
        "startingLocation": "The Forest of the Fey",
        "funFact": "Prefers to dual wield"
      },
      {
        "name": "Freya Helvig",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Maidens of War",
        "startingLocation": "Ye Olde Long House",
        "funFact": "Prefers two handed weapons"
      }
    ];
  }
}
