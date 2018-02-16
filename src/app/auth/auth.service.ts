import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  login:boolean;

  constructor(private http:HttpClient, private router:Router) {
  }

  IsLoggedIn():boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true
  }
}
