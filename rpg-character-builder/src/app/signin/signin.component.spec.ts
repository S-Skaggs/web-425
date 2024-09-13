import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { SigninComponent } from './signin.component';

// Create a mock of the AuthService
class MockAuthService {
  // Mock of the AuthService's signin method
  signin(email: string, password: string) {
    return of(true);
  }
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SigninComponent, ReactiveFormsModule],
      providers: [{provide: AuthService, useClass: MockAuthService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Default test to verify component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Week 5 tests
  // Test that the sigin method is called
  it('should call signin method on form submit', () => {
    // Create a spy object to spy on the authService's signin method
    const signinSpy = spyOn((component as any).authService, 'signin').and.callThrough();

    // Set values for the form's input boxes
    component.signinForm.controls['email'].setValue('test@test.com');
    component.signinForm.controls['password'].setValue('01Test23');

    // Call signin method
    component.signin();

    expect(signinSpy).toHaveBeenCalledWith('test@test.com', '01Test23');
  });
});
