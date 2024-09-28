import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { GuildInformation, CreateGuildComponent } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockGuilds: GuildInformation[] = [
      { guildName: 'Test Mercenaries', description: 'A group of hired testers!', type: 'Educational', acceptTerms: true, notificationPreference: 'In-App' },
      { guildName: 'Coding Wizards', description: 'A group of technomancers.', type: 'Casual', acceptTerms: true, notificationPreference: 'Email' },
      { guildName: 'Night Ops', description: 'The Ops team, we work at night.', type: 'Competitive', acceptTerms: true, notificationPreference: 'SMS' }
    ];

    component.savedGuilds = mockGuilds;

    fixture.detectChanges();
  });

  // Default test to check that the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Week 7 Unit Tests
   */
  // Test for guilds to be displayed
  it('should display the saved guilds', () => {
    // Create an array of guilds
    const mockGuilds: GuildInformation[] = [
      { guildName: 'Test Mercenaries', description: 'A group of hired testers!', type: 'Educational', acceptTerms: true, notificationPreference: 'In-App' },
      { guildName: 'Coding Wizards', description: 'A group of technomancers.', type: 'Casual', acceptTerms: true, notificationPreference: 'Email' },
      { guildName: 'Night Ops', description: 'The Ops team, we work at night.', type: 'Competitive', acceptTerms: true, notificationPreference: 'SMS' }
    ];

    // Assign the guilds to the savedGuilds property
    component.savedGuilds = mockGuilds;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Test Mercenaries');
    expect(compiled.querySelector('div').textContent).toContain('A group of hired testers!');
    expect(compiled.querySelector('div').textContent).toContain('true');
    expect(compiled.querySelector('div').textContent).toContain('In-App');
  });

  // Test to display no guilds message
  it('should display a message when there are no guilds', () => {
    component.savedGuilds = [];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No guilds to display.');
  });
});
