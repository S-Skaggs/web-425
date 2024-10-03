import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Default test to make sure the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Week 8 Unit Tests
   */
  // Test for proper response if no data is found
  it('should handle error when no data is found', () => {
    // Expected message from API if there is no data
    const expectedMessage = 'No factions were found, please try again later.';

    // Create a test request to get the factions
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);

    // Flush the request and have it return a 404 response
    req.flush('Factions not found', { status: 404, statusText: 'Not Found' });

    expect(component.noFactionsMessage).toEqual(expectedMessage);
  });

  // Test for proper response on any non-404
  it('should handle error when it is not a 404 error', () => {
    // Expected message from API if there is some other error
    const expectedMessage = 'We have been waylaid! No factions were found, please try again later.';

    // Create a test request to get the factions
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);

    // Flush the request and have it return a 500 response
    req.flush('500 Internal server error', { status: 500, statusText: '500 Internal server error' });

    expect(component.noFactionsMessage).toEqual(expectedMessage);
  });

  // Test to return the character factions
  it('should return a list of character factions', () => {
    // Create a mock of factions to return
    const mockFactions = [
      { name: 'Loyal Archers', description: 'This is a faction of lawful and good warriors and rogues. They are all specialized with some form of bow or crossbow and pride themselves on protecting those in need.' },
      { name: 'The Dark Shadows', description: 'This is a faction of cunning rogues. They value stealth, cunning, and the ability to talk oneself out of trouble. Although some do use their skills for assassinations, the majority operate as spies. Knowledge is power.' },
      { name: 'The Guiding Light', description: 'This is a faction of good aligned wizards. They strive to help others through education, simple magic tasks, and when needed strong magical protection. Mind over matter.' }
    ];

    // Create a test request to get the factions
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);

    // Flush the request to return our mockFactions
    req.flush(mockFactions);

    // Test that each faction is in the component
    for(const mockFaction of mockFactions) {
      expect(component.characterFactions).toContain(mockFaction);
    }
  });

  // Test that factions are displayed
  it('should display the returned factions', () => {
    // Create a mock of factions to return
    const mockFactions = [
      { name: 'Loyal Archers', description: 'This is a faction of lawful and good warriors and rogues. They are all specialized with some form of bow or crossbow and pride themselves on protecting those in need.' },
      { name: 'The Dark Shadows', description: 'This is a faction of cunning rogues. They value stealth, cunning, and the ability to talk oneself out of trouble. Although some do use their skills for assassinations, the majority operate as spies. Knowledge is power.' },
      { name: 'The Guiding Light', description: 'This is a faction of good aligned wizards. They strive to help others through education, simple magic tasks, and when needed strong magical protection. Mind over matter.' }
    ];

    // Create a test request to get the factions
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);

    // Flush the request to return our mockFactions
    req.flush(mockFactions);

    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Loyal Archers');
    expect(compiled.querySelector('div').textContent).toContain('The Dark Shadows');
    expect(compiled.querySelector('div').textContent).toContain('The Guiding Light');
  });
});
