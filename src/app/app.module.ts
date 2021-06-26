import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RequestComponent } from './request/request.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ReqDetailsComponent } from './req-details/req-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    UserHomeComponent,
    RequestComponent,
    FindDonorComponent,
    AdminComponent,
    AdminUserComponent,
    ProfileComponent,
    FooterComponent,
    ReqDetailsComponent,
    AdminRequestComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
