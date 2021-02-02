import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from './auth.service'; 
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}  
   
  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);      
      return false;
    }
   /* else {

      const token =this.token.getToken(); 
      const tokenPayload = jwt_decode(token);
      const username =tokenPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]; 
      const userrole = tokenPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      //console.log(username);
      //console.log(userrole);
      // let roles = route.data["roles"] as Array<string>;
      // if(roles!=null &&roles[0]=="user"){
      //   console.log('Yes');
      // }
       
      const allowedRoles = route.data.userrole;
      console.log(route.data.userrole);
       
      return true;
    }*/
    return true;
  }
}