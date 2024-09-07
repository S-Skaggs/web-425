export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

export interface Roster {
  characters: Character[];
  rosterId: number;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="creation-form-container">
      <form class="character-creation-form" #characterCreationForm="ngForm" (ngSubmit)="createCharacter();">
        <h1>Complete the form below to create a character</h1>

        <fieldset>
          <legend>New Character</legend>

          <label for="name">Name</label>
          <input type="text" class="text-input" maxlength="25" id="name" name="name" autocomplete="off" required [(ngModel)]="name" ngModel />

          <label for="gender">Gender</label>
          <select id="gender" name="gender" required [(ngModel)]="selectedGender" ngModel>
            @for (gender of genders; track gender) {
              <option value="{{ gender }}">{{ gender }}</option>
            }
          </select>

          <label for="class">Class</label>
          <select id="class" name="class" required [(ngModel)]="selectedClass" ngModel>
            @for (class of classes; track class) {
              <option value="{{ class }}">{{ class }}</option>
            }
          </select>

          <input type="submit" value="Create Character" />
        </fieldset>
      </form>
    </div>

    @if(this.roster.characters.length > 0) {
        <div class="roster-container">
          <h1>Character Roster</h1>
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
        </div>
      }
  `,
  styles: [
    `
      .creation-form-container {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .character-creation-form {
        flex: 1;
        margin-right: 20px;
      }

      fieldset {
        font-family: 'Artifika', Papyrus, fantasy;
        font-size: 1.2rem;
        margin-bottom: 20px;
      }

      label {
        font-size: 1rem;
        font-weight: bold;
      }

      label,
      select,
      .text-input {
        display: block;
        margin-bottom: 5px;
      }

      .text-input,
      select,
      input[type='submit'] {
        padding: 8px;
        box-sizing: border-box;
      }

      select, input[type='text'] {
        width: 33%;
        font-family: 'Encode Sans Semi Condensed', Verdana, Helvetica, sans-serif;
      }

      input[type='submit'] {
        float: right;
        border-radius: 8px;
        cursor: pointer;
      }

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
  ]
})
export class CreateCharacterComponent {
  // Declare component level variables
  roster: Roster;
  classes: string[];
  genders: string[];
  characterId: number;
  name: string;
  selectedGender: string;
  selectedClass: string;

  constructor() {
    this.roster = { characters: [], rosterId: 0};
    this.classes = ['Mage', 'Rogue', 'Warrior'];
    this.genders = ['Female', 'Male', 'Other'];
    this.characterId = 1;
    this.name = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }

  createCharacter() {
    this.characterId = Math.floor(Math.random() * 1000) + 1;
    this.addToRoster();
  }

  addToRoster() {
    this.roster.rosterId = this.roster.rosterId > 0 ? this.roster.rosterId : Math.floor(Math.random() * 1000) + 1;
    const newCharacter = {
      id: this.characterId,
      name: this.name,
      gender: this.selectedGender,
      class: this.selectedClass
    };

    this.roster.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.characterId = 1;
    this.name = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }
}
