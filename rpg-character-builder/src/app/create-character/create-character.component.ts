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

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent],
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

    <app-character-list [roster]='roster'></app-character-list>
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
      }

      input[type='submit'] {
        float: right;
        border-radius: 8px;
        cursor: pointer;
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
