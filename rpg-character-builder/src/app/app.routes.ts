import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { CharacterRecordSheetsComponent } from './character-record-sheets/character-record-sheets.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'character-faction',
    component: CharacterFactionComponent
  },
  {
    path: 'character-record-sheets',
    component: CharacterRecordSheetsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
