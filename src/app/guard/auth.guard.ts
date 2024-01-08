import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  else {
    window.location.href = '/auth/login';
    return false;
  }
};
