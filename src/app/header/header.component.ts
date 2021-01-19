import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  title = 'authTest';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  token:string;
  
  constructor(private tokenStorageService: TokenStorageService , private httpClient : HttpClient,private http: HttpClient) { }
   
  ngOnInit(): void {
   
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser(); 
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
      this.token=user.accessToken;      
      this.getLoggedInUser(this.token) ; 
      
      
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  } 
  
  getLoggedInUser(toke) {  

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " +toke);
    const httpOptions = { headers: headers_object};

    return this.http.get("http://localhost:61955/Api/Authenticate/getuser",httpOptions).subscribe(resp => {
       var data=resp;
    console.log(data);
      });
   
  }
}
