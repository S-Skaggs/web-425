import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Week 4 Unit tests
  /**
   * Test to check character ID created from 1 - 1000.
   */
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createCharacter(); // Generates a new character ID
    expect(component.characterId).toBeGreaterThan(0);
    expect(component.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterId)).toBe(true);
  });

    /**
   * Test to check roster ID created from 1 - 1000.
   */
    it('should generate a random roster ID between 1 and 1000 with no decimal places', () => {
      component.addToRoster(); // Generates a new roster ID if rosterId is not greater than 0
      expect(component.roster.rosterId).toBeGreaterThan(0);
      expect(component.roster.rosterId).toBeLessThanOrEqual(1000);
      expect(Number.isInteger(component.roster.rosterId)).toBe(true);
    });

  /**
   * Test to ensure characters are created with proper customization
   * Characters are created when they are added to the roster
   */
  it('should add a character to the roster with proper customization', () => {
    component.characterId = 4;
    component.name = 'John Doe';
    component.selectedGender = 'Male';
    component.selectedClass = 'Warrior';

    component.addToRoster();
    const newCharacter = component.roster.characters[0];

    expect(newCharacter.id).toBe(4);
    expect(newCharacter.name).toBe('John Doe');
    expect(newCharacter.gender).toBe('Male');
    expect(newCharacter.class).toBe('Warrior');
  });

  /**
   * Test to ensure form fields are reset when resetForm is called
   */
  it('should reset all form fields to their default values after resetForm is called', () => {
    component.characterId = 2;
    component.name = 'Jane Doe';
    component.selectedGender = 'Female';
    component.selectedClass = 'Mage';

    component.resetForm();

    expect(component.characterId).toBe(1);
    expect(component.name).toBe('');
    expect(component.selectedGender).toBe('');
    expect(component.selectedClass).toBe('');
  });
});
