import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRecordSheetsComponent } from './character-record-sheets.component';

describe('CharacterRecordSheetsComponent', () => {
  let component: CharacterRecordSheetsComponent;
  let fixture: ComponentFixture<CharacterRecordSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterRecordSheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterRecordSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
