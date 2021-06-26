import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=false;
  loginData={
    email:'',
    password:''
  }
  constructor(private authService: AuthService,private snackBar:MatSnackBar) { }

  showError:boolean;
  ngOnInit(): void {
  }
  formSubmit()
  {
    this.hide=true;
    this.authService.generateTocken(this.loginData).subscribe((data: any)=>{
      if(data.jwt!=null && data.userDetails!=null){
        console.log(data);
        this.authService.loginUser(data.jwt,data.userDetails); 
        this.snackBar.open('login Successfull', 'Undo', {
          duration: 3000
        });
        if(data.userDetails.roles==="ROLE_USER"){
          setTimeout(() => {
            location.href= "user";
          }, 4000);
        }else{
          setTimeout(() => {
            location.href= "admin";
          }, 4000);
        }
      }else{
        this.snackBar.open(data.privatemsg, 'Undo', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
      }
    })
  }

}
