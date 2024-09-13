import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    // Create an instance of Spy to monitor the CookieService's set and deleteAll methods
    const testSpy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);

    TestBed.configureTestingModule({
      providers: [AuthService, {provide: CookieService, useValue: testSpy}]
    });

    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  // Default test to check component is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Week 5 Unit Tests
  // Test successful signin
  it('should set cookie and authState to true on successful signin', () => {
    const result = service.signin('yes@music.com', 'LeaveIt_1984');
    expect(result).toBeTrue();
    expect(service.getAuthState().subscribe(state => expect(state).toBeTrue()));
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  // Test unsuccessful signin
  it('should not set cookie and authState to true on unsuccessful signin', () => {
    const result = service.signin('invalid@test.com', 'notapassword');
    expect(result).toBeFalse();
    expect(service.getAuthState().subscribe(state => expect(state).toBeFalse()));
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
