import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "../../node_modules/@angular/common/http/src/response";
import { ErrorObservable } from "../../node_modules/rxjs/src/observable/ErrorObservable";
import { of } from 'rxjs/observable/of'

@Injectable()
export class ProductService {


  constructor(private http:HttpClient) {
  }

  private handleError(error:HttpErrorResponse) {
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };


  getProducts(token):Observable<any> {
    return this.http.post<any>("http://localhost:3000/get-all-ads", {token: token})
      .pipe(
        catchError(this.handleError)
      );
  }

  adSubmit(adDetails):Observable<any> {
    return this.http.post<any>("http://localhost:3000/create-ad", adDetails)
    /*.pipe(
     tap(heroes => console.log(heroes)),
     catchError(this.handleError)
     ); */
  }

  signup(user):Observable<any> {
    return this.http.post<any>("http://localhost:3000/signup", user)
      .pipe(

        catchError(this.handleError)
      );
  }

  login(user):Observable<any> {
    return this.http.post<any>("http://localhost:3000/login", user)
      .pipe(
        catchError(this.handleError)
      )
  }

  getUserAds(token):Observable<any> {
    return this.http.post<any>("http://localhost:3000/get-user-ad", token)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAdDetails(_id, token):Observable<any> {
    return this.http.post<any>("http://localhost:3000/get-ad-details", {_id: _id, token: token})
      .pipe(
        catchError(this.handleError)
      )
  }

  doComment(commentAndUserDetail):Observable<any> {
    return this.http.post("http://localhost:3000/add-comment", commentAndUserDetail)
      .pipe(
        catchError(this.handleError)
      )
  }


  getToken():any {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return JSON.parse(token);
  }

  setToken(token):void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  deleteToken():void {
    localStorage.removeItem('token')
  }

}
