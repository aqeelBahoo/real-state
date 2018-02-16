import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import {AuthService} from "./auth.service";
import {ProductService} from "../product.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth:AuthService, private productService:ProductService, public router:Router) {
  }

  canActivate():boolean {
    if (this.auth.IsLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false
    }
  }
}
