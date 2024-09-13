import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  // Reference to the cookie service to check for the session_user entry
  const cookieService = inject(CookieService);

  // Check the session_user in the cookies
  if(cookieService.get('session_user')) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/signin'], {queryParams: {returnUrl: state.url}});
    return false;
  }
};
