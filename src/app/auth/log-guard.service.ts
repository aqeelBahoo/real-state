import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ProductService} from "../product.service";
import {AuthService} from "./auth.service";

@Injectable()
export class LogGuardService implements CanActivate {

  constructor(private productService:ProductService, private authService:AuthService, private router:Router) {
  }

  canActivate():boolean {
    if (this.authService.IsLoggedIn()) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }

}
