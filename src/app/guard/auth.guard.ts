import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : UserService, private router : Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url;
    return this.validateloggedUser(url);
  }

  validateloggedUser(url : string) : boolean {
    if (this.userService.isValid()) return true; 
    
    this.userService.redirectUrl = url;
    this.router.navigateByUrl("")
    return false;
  }
  
}
