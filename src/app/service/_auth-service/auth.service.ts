import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser')){
      return true;
    }
    //this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}} );  
    this.router.navigate(['/login']);  
    return false;
  }
}
