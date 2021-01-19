import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'authTest';
  // private roles: string[];
  // isLoggedIn = false;
  // showAdminBoard = false;
  // showModeratorBoard = false;
  // username: string;
  
  constructor(private tokenStorageService: TokenStorageService , private httpClient : HttpClient) { }
  
  ngOnInit(): void {
   
    // this.isLoggedIn = !!this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser(); 
    //   this.roles = user.roles;

    //  this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //  this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    //   this.username = user.name;
    //   console.log(user);
    // }
  }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
  // getDummy() {
  //   this.httpClient.post("http://localhost:61955/Api/Authenticate/getuser",this.b).subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
