import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

          <label>Accept Terms and Conditions</label>
          <input type="checkbox" formControlName="acceptTerms" />

          <label>Communication Preference</label>
          @for(notificationPreference of notificationPreferences; track notificationPreference;) {
            <input type="radio" [value]="notificationPreference" formControlName="notificationPreference">{{ notificationPreference }}<br />
          }

          <input type="submit" [disabled]="!guildForm.valid" value="Create Guild">
        </fieldset>
      </form>
    </div>
    <pre>{{ savedGuilds | json }}</pre>
  `,
  styles: `
    form-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    .guild-form, .guilds {
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
      display: block;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      float: right;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    fieldset {
      margin-bottom: 20px;
    }
  `
})
export class CreateGuildComponent {
  guildTypes: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreferences: string[] = ['Email', 'SMS', 'In-App'];
  savedGuilds: any;

  guildForm: FormGroup = this.formBuilder.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [null, Validators.compose([Validators.required])],
    notificationPreference: [false, Validators.compose([Validators.required])]
  });

  constructor(private formBuilder: FormBuilder){}

  createGuild() {
    // Create an object for the new guild
    const newGuild = {
      guildName: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      acceptTerms: this.guildForm.value.acceptTerms,
      notificationPreference: this.guildForm.value.notificationPreference
    };

    // Log new guild
    console.log('New guild: ', newGuild);

    this.savedGuilds.push(newGuild);
  }
}
