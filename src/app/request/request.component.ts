import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { district} from '../shared/district';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  states: Array<any> = [];
  request={
    patientName:'',
    doctorName:'',
    bloodGroup:'',
    state:'',
    district:'',
    city:'',
    contactName:'',
    mobileNumber:'',
    dateNeeded:'',
    priority:'',
    email:''
  }
  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.states=district;
  }
  
  districts: Array<any> = [];
  change(state) {
    this.districts = this.states.find(con => con.name == state).districts;
  }

  requestData(){
    console.log(this.request)
    this.authService.requestDetails(this.request).subscribe((data:any)=>{
      console.log(data);
      this.snackBar.open(data.privatemsg,'close',{
        duration:3000
      });
      setTimeout(() => {
        location.href="/user";
      }, 3000);
      
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
