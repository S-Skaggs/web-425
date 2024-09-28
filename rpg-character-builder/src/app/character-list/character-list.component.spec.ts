import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { Character, Roster, CreateCharacterComponent } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockRoster: Roster = {
      rosterId: 10,
      characters: [
        { id: 100, name: 'Fred Bob', gender: 'Male', class: 'Warrior' },
        { id: 110, name: 'Jane Doe', gender: 'Female', class: 'Rouge' },
        { id: 120, name: 'Pat', gender: 'Other', class: 'Mage' }
      ]
    };

    component.roster = mockRoster;

    fixture.detectChanges();
  });

  // Default test to check that the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Week 7 Unit Tests
   */
  // Test for characters to be displayed
  it('should display the characters in the roster.', () => {
    // Create a roster of characters
    const mockRoster: Roster = {
      rosterId: 10,
      characters: [
        { id: 100, name: 'Fred Bob', gender: 'Male', class: 'Warrior' },
        { id: 110, name: 'Jane Doe', gender: 'Female', class: 'Rouge' },
        { id: 120, name: 'Pat', gender: 'Other', class: 'Mage' }
      ]
    };
    // Assign the roster to the component
    component.roster = mockRoster;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Fred Bob');
    expect(compiled.querySelector('div').textContent).toContain('Male');
    expect(compiled.querySelector('div').textContent).toContain('Warrior');
  });

  // Test to display empty roster message
  it('should display a message for an empty roster', () => {
    // Assign a roster with no characters to the component
    component.roster = {rosterId: 42, characters: [] };

    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No characters to display.');
  });
});
