export interface GuildInformation {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from "../guild-list/guild-list.component";

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <div class="form-container">
      <form [formGroup]="guildForm" class="guild-form" (ngSubmit)="createGuild(); guildForm.reset();">
        <h1>Complete the form below to create your guild.</h1>
        <fieldset>
          <legend>Create Guild</legend>

          <label>Guild Name</label>
          <input type="text" formControlName="guildName" />

          <label>Describe Your Guild</label>
          <textarea rows="10" formControlName="description"></textarea>

          <label>Guild Type</label>
          <select formControlName="type">
            @for(guildType of guildTypes; track guildType;) {
              <option [value]="guildType">{{ guildType }}</option>
            }
          </select>

          <label>
            Accept Terms and Conditions
            <input type="checkbox" formControlName="acceptTerms" />
          </label>

          <label>Communication Preference</label>
          @for(notificationPreference of notificationPreferences; track notificationPreference;) {
            <input type="radio" [value]="notificationPreference" formControlName="notificationPreference">{{ notificationPreference }}<br />
          }

          <input type="submit" [disabled]="!guildForm.valid" value="Create Guild">
        </fieldset>
      </form>

      <div class="savedGuilds">
        <app-guild-list [savedGuilds]='savedGuilds'></app-guild-list>
      </div>
    </div>
  `,
  styles: `
    form-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    .guild-form, .savedGuilds {
      width: 100%;
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    label:first-of-type {
      margin-top: 0px;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    select {
      width: 20%;
      display: block;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      float: right;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    input[type=text] {
      width: 25%;
    }
  `
})
export class CreateGuildComponent {
  guildTypes: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreferences: string[] = ['Email', 'SMS', 'In-App'];
  savedGuilds: GuildInformation[];
  newGuild: GuildInformation;

  guildForm: FormGroup = this.formBuilder.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.compose([Validators.requiredTrue])],
    notificationPreference: [null, Validators.compose([Validators.required])]
  });

  constructor(private formBuilder: FormBuilder){
    this.newGuild = {
      guildName: '',
        description: '',
        type: '',
        acceptTerms: false,
        notificationPreference: ''
    };

    /*
    Remove hard coded list of saved guilds

    this.savedGuilds = [
      {
        guildName: 'Disciples of Chaos',
        description: 'We are a chaotic, not necessarily evil, guild. We are interested in having fun even if it means bending the rules.',
        type: 'Casual',
        acceptTerms: true,
        notificationPreference: 'SMS'
      },
      {
        guildName: 'The Squires of Gothos',
        description: 'A highly competitive guild. We are always up for a challenge.',
        type: 'Competitive',
        acceptTerms: true,
        notificationPreference: 'In-App'
      },
      {
        guildName: 'Ivory Towers',
        description: 'Need to learn the game or just have some questions, this is the guild for you. We are focused on educating our members to be good game citizens. Well, at least knowledgeable.',
        type: 'Education',
        acceptTerms: true,
        notificationPreference: 'Email'
      }
    ];
    */

    this.savedGuilds = [];
  }

  createGuild() {
    // Populate the newGuild object
    this.newGuild = {
      guildName: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      acceptTerms: this.guildForm.value.acceptTerms,
      notificationPreference: this.guildForm.value.notificationPreference
    };

    // Log new guild
    console.log('New guild: ', this.newGuild);

    // Save new guild
    this.savedGuilds.push(this.newGuild);
  }
}
