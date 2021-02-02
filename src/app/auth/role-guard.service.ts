import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router,private token: TokenStorageService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const allowedRoles = route.data.allowedRoles;
    const token =this.token.getToken();      
    // decode the token to get its payload
    const tokenPayload = decode(token);
    
   // console.log(tokenPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
    if (!this.auth.isAuthenticated() ||tokenPayload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] !== allowedRoles )
     {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
