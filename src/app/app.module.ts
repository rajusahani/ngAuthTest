import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
//import { RoleGuardService } from './auth/role-guard.service';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { JwtModule,JwtHelperService,JWT_OPTIONS  } from '@auth0/angular-jwt';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderComponent 
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    AppRoutes,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,
    BsDropdownModule.forRoot() 
    
  ],
  providers: [authInterceptorProviders,AuthService, AuthGuardService,JwtHelperService],
  bootstrap: [AppComponent]
})
 
export class AppModule { }
