export interface Faction {
  name: string;
  description: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  template: `
    <div>
      <h1>Character Factions</h1>
      @if(this.characterFactions.length > 0) {
        <section class="character-factions">
          @for(faction of this.characterFactions; track faction) {
            <div class="faction-display">
              <h3>{{ faction.name }}</h3>
              <p class="dropCap">{{ faction.description }}</p>
            </div>
          }
        </section>
      } @else {
        <p>{{ this.noFactionsMessage }}</p>
      }
    </div>
  `,
  styles: `
    .character-factions {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .faction-display {
      border: 4px double #b22222;
      border-radius: 8px;
      background-image: linear-gradient(135deg, #fff, #fcfcfc, #ff4040);
      padding: 0 5px 5px;
      text-align: left;
      flex: 0 1 calc(33.333% - 20px);
      box-sizing: border-box;
    }

    .faction-display h3 {
      text-align: center;
    }
  `
})
export class CharacterFactionComponent {
  noFactionsMessage: string = '';
  characterFactions: Faction[] = [];

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
      next: (res) => {
        console.log(res);
        this.characterFactions = res as Faction[];
      },
      error: (err) => {
        console.error('Error fetching character factions', err);
        if(err.error === 'Factions not found') {
          this.noFactionsMessage = 'No factions were found, please try again later.';
        } else {
          this.noFactionsMessage = 'We have been waylaid! No factions were found, please try again later.';
        }
      }
    });
  }
}
