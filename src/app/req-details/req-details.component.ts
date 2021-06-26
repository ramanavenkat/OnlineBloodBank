import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-details',
  templateUrl: './req-details.component.html',
  styleUrls: ['./req-details.component.css']
})
export class ReqDetailsComponent implements OnInit {
  reqData:any=[];

  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.authService.getDetails().subscribe((data)=>{
      console.log(data);
      this.reqData=data;
      console.log(this.reqData);
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

}
