import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component'; 
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';

export const routes: Routes = [
  //{ path: '', redirectTo: "/login", pathMatch: 'full' },  
  { 
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] 
 },
  { path: 'login', component: LoginComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin',
    component: BoardAdminComponent,
    canActivate: [RoleGuard] ,
    data: {allowedRoles: 'admin'} 
  },
  { 
    path: 'user',
    component: BoardAdminComponent,
    canActivate: [RoleGuard] ,
    data: {allowedRoles: 'user'} 
  },  
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutes { }