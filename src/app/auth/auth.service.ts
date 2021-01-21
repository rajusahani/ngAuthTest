import { Injectable } from '@angular/core';
import { JwtModule ,JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenStorageService } from '../_services/token-storage.service';
//import { Injector, NgModule, Optional, SkipSelf } from '@angular/core';

 
@Injectable({ providedIn: 'root' })

export class AuthService {
   
  constructor(public jwtHelper: JwtHelperService,private token: TokenStorageService) {}
  //constructor(private token: TokenStorageService) {}
  // ...
  public isAuthenticated(): boolean {
     const token = this.token.getToken();
     //console.log(token);
     if(token==null){
       return false; 
     }
    // Check whether the token is expired and return
    // true or false
    return true;//!this.jwtHelper.isTokenExpired(token);
  }
  
}
 