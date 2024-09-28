import { Component, Input } from '@angular/core';
import { GuildInformation } from '../create-guild/create-guild.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Current Guilds</h1>
    @if(this.savedGuilds.length > 0) {
      <div class="savedGuilds-container">
        @for(guild of savedGuilds; track guild) {
          <fieldset class="guildCard">
            <legend>{{ guild.guildName }}</legend>
            <div class="displayGuild">
              <h4 class="displayInlineInfo">Type: </h4>
              <p class="displayInlineInfo">{{ guild.type }}</p>
              <h4 class="tightenDisplay">Description:</h4>
              <p class="tightenDisplay">{{ guild.description }}</p>
              <p class="displayTechnical">Notification preference {{ guild.notificationPreference }} Accepted terms {{ guild.acceptTerms }}</p>
            </div>
          </fieldset>
        }
      </div>
    } @else {
      <p>No guilds to display.</p>
    }
  `,
  styles: `
    .savedGuilds-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }

    .guild-card {
      box-sizing: border-box;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      box-shadow: 0 2px 4 px rgba(0, 0, 0, 0.1);
    }

    .displayGuild {
      font-family: 'Encode Sans Semi Condensed', Verdana, Helvetica, sans-serif;
    }

    .savedGuilds-container fieldset:nth-child(odd) {
      background-color: #fdf5e6;
      padding: 5px 10px 15px;
      border-radius: 10px;
    }

    .savedGuilds-container fieldset:nth-child(even) {
      background-color: #ffefd5;
      padding: 5px 10px 15px;
      border-radius: 10px;
    }

    .tightenDisplay {
      margin: 10px 0 0;
    }

    .displayInlineInfo {
      display: inline;
    }

    .displayTechnical {
      font-size: .6rem;
      float: right;
    }
  `
})
export class GuildListComponent {
  @Input() savedGuilds!: GuildInformation[];
}
