import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from '../_services/token-storage.service'; 

@Injectable({ providedIn: 'root' })

export class AuthService {
   
  constructor(public jwtHelper: JwtHelperService,private token: TokenStorageService) {}
  //constructor(private token: TokenStorageService) {}
  public isAuthenticated(): boolean {
     const token = this.token.getToken();    
    // Check whether the token is expired and return
    // true or false     
    //console.log(this.jwtHelper.isTokenExpired(token));
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }
  
}
 