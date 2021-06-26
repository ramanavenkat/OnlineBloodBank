import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  count:any=[];
  c:any;
  constructor(private authService: AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.countGroup();
    this.length();
     
  }

  countGroup(){
    this.authService.countBlood().subscribe((data)=>{
      console.log(data);
      this.count=data;
      console.log(this.count);
    }, (err) => {
      console.log(err.error.error);
      if(err.error.error=="Forbidden")  {
        this.snackBar.open('Invalid Request! Please Login In...', 'close', {
          duration: 3000
        });
        setTimeout(() => {
          location.href="/login";
        }, 3000);
        
      }
        
    })
  }
  length(){
      this.authService.scrollData().subscribe((data)=>{
        console.log("Hi venkat"+data);
        this.c=JSON.stringify(data);
      } , (err) =>{
        if(err.error.error=="Forbidden"){
          this.snackBar.open('Invalid Request! Please Login...', 'close', {
            duration: 3000
          });
          setTimeout(() => {
            location.href="/login";
          }, 3000);
          
        }
      })
  }
  redirect(){
    location.href="/user"
  }

}
