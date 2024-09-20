import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Default test to check that the component is created
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Week 6 Unit tests
   */
  // Verify form is invalid if nothing is filled out
  it('should indicate the form is invalid if no required fields supplied', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  // Verify form is valid when required fields filled out
  it('should indicate valid when required fields supplied', () => {
    // Provide data for required fields
    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['description'].setValue('A guild for testing.');
    component.guildForm.controls['type'].setValue('Educational');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('Email');

    // Test validity
    expect(component.guildForm.valid).toBeTruthy();
  });

  // Verify form is invalid when acceptTerms is false (not checked)
  it('should indicate invalid when acceptTerms is false (not checked)', () => {
    // Provide data for required fields
    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['description'].setValue('A guild for testing.');
    component.guildForm.controls['type'].setValue('Educational');
    component.guildForm.controls['acceptTerms'].setValue(false);
    component.guildForm.controls['notificationPreference'].setValue('Email');

    // Test validity
    expect(component.guildForm.valid).toBeFalsy();
  });

  // Verify valid form can be submitted
  it('should allow a valid form to be submitted', () => {
    // Create a spy for createGuild
    spyOn(component, 'createGuild');

    // Provide data for required fields
    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['description'].setValue('A guild for testing.');
    component.guildForm.controls['type'].setValue('Educational');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('Email');

    fixture.detectChanges();

    // Obtain a reference to the form
    const form = fixture.debugElement.query(By.css('form'));
    // Submit the form
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });
});
