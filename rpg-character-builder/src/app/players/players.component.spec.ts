import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Created when CLI generated the component
   * Test that the component was created
   * Week 3: Unit test 1
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test to correctly display a list of characters
   * Week 3: Unit Test 2
   */
  it('should correctly display a list of characters', () => {
    // Variable to hold the compiled HTML
    const compiled = fixture.nativeElement as HTMLElement;
    // Variable to hold the character list
    const characterList = compiled.querySelectorAll('.characterlist-character');

    // Check if the number of characters is equal to the number of characters in the character array
    expect(characterList.length).toEqual(component.characterList.length);
  });
});
