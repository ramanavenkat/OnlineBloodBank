import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  aGetUser:any=[];
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.authService.users().subscribe((data:any) =>{
      console.log(data);
      for(var i=0;i<data.length;i++){
        if(data[i].roles!="ROLE_ADMIN"){
          this.aGetUser.push(data[i]);
        }
      }
      // this.aGetUser=data;
      console.log(this.aGetUser);
      
    }, (err) =>{
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
  delete(id:any){
    this.authService.dataDelete(id).subscribe((data:any) =>{
      this.snackBar.open(data.privatemsg,'close',{
        duration:3000
      })
      setTimeout(() => {
        location.href="/adminUser";
      }, 3000);
    })
  }

}
