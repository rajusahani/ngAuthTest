import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:61955/Api/Authenticate/';

const httpOptions = {
  headers: new HttpHeaders({ 
    //'Access-Control-Allow-Origin':'*',
  //'Access-Control-Allow-Headers':'Content-Type',
  //'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
  'Content-Type':'application/json'
  
   })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {       
    return this.http.post(AUTH_API + 'signin', {            
      username: credentials.username,
      password: credentials.password     
      
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  registerAdmin(user): Observable<any> {
    return this.http.post(AUTH_API + 'register-admin', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
