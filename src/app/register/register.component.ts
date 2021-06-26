import { AuthService } from './../services/auth.service';
import { district} from '../shared/district';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide:boolean=false;
  states: Array<any> = [];
  regData={
    fullName:'',
    email:'',
    password:'',
    bloodGroup:'',
    gender:'',
    dob:'',
    mobileNumber:'',
    state:'',
    pinCode:'',
    district:'',
    city:''
  }
  
  constructor(private authService: AuthService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.states=district;
  }
  
  districts: Array<any> = [];
  change(state) {
    this.districts = this.states.find(con => con.name == state).districts;
  }
  register(){
    this.hide=true;
    console.log(this.regData);
    this.authService.registerData(this.regData).subscribe((data)=>{
      console.log(data);
      this.snackBar.open('Registration Success.Login once again', 'Undo', {
        duration: 5000
      });
      setTimeout(() => {
        location.href="/login";
      }, 5000);
    })
  }
  

}
