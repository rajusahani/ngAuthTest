import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import  jwt_decode from 'jwt-decode';
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
  username: string; 
  userrole:string;
  token:string;
  
  constructor(private tokenStorageService: TokenStorageService , private httpClient : HttpClient,private http: HttpClient) { }
   
  ngOnInit(): void {
   
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser(); 
      this.roles = user.roles;
      this.userrole=this.roles.length==1?this.roles[0]:this.roles[1];
      this.showAdminBoard =this.userrole=="admin"?true:false;//.includes('ROLE_ADMIN');      
      this.username = user.username;
     // this.token=user.accessToken;      
      //this.getLoggedInUser(this.token) ; 
      //var decoded = jwt_decode(this.token);   
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    //window.location.reload();
  } 
  
  getLoggedInUser(toke) {  

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " +toke);
    const httpOptions = { headers: headers_object};

    return this.http.get("http://localhost:61955/Api/Authenticate/getuser").subscribe(resp => {
       var data=resp;
       console.log(data);
      });
   
  }
}
