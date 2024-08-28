import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { of } from 'rxjs';
import { PlayersComponent } from './players/players.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue'
        },
      },
      queryParams: of({})
    };

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule.withRoutes(routes), // Includes RouterTestingModule to handle routing
        PlayersComponent
      ],
    }).compileComponents();
  });

  const routes: Routes = [
    {path: 'players', component: PlayersComponent}
  ]

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rpg-character-builder' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rpg-character-builder');
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header')?.textContent).toContain('RPG Character Builder');
  });

  /**
   * Test to verify PlayersComponent route
   * Week 3: Unit Test 3
   */
  it('should have correct route for Players Component', () => {
    const router = TestBed.inject(Router); // Access the router
    const route = router.config.find(r => r.path === 'players'); // Players route

    expect(route).toBeDefined(); // Route should be defined
    if(route) {
      expect(route.component).toBe(PlayersComponent); // Check that the component is the PlayersComponent
    }
  })
});
