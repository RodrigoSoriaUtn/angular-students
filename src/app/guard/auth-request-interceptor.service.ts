import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestInterceptorService implements HttpInterceptor {

  constructor(private router : Router) { }

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    let jwt = localStorage.getItem("jwt")

    let request = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + jwt
      }
    })
    console.log("Intercepted request. Adding token : " + jwt)

    return next.handle(request)
  }

}