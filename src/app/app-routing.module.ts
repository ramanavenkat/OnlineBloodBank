import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ReqDetailsComponent } from './req-details/req-details.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { RequestComponent } from './request/request.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"user",component:UserHomeComponent},
  {path:"request",component:RequestComponent},
  {path:"find",component:FindDonorComponent},
  {path:"admin",component:AdminComponent},
  {path:"profile",component:ProfileComponent},
  {path:"reqDetail",component:ReqDetailsComponent},
  {path:"adminUser",component:AdminUserComponent},
  {path:"aDetails",component:AdminRequestComponent},
  {path:"aProfile",component:AdminProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
