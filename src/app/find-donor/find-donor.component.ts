import { MatSnackBar } from '@angular/material/snack-bar';
import { district } from './../shared/district';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-find-donor',
  templateUrl: './find-donor.component.html',
  styleUrls: ['./find-donor.component.css']
})
export class FindDonorComponent implements OnInit {
  states: Array<any> = [];
  bloodDetails:any=[];
  bloodList:any=[];
  details={
    bloodGroup:'',
    state:'',
    dist:''
  }

  constructor(private authService: AuthService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.states=district;
  }
  
  districts: Array<any> = [];
  change(state) {
    this.districts = this.states.find(con => con.name == state).districts;
  }

  find(){
    this.bloodList=[];
    console.log(this.details);
    this.authService.findDetails(this.details).subscribe((data)=>{
      console.log(data);
      this.bloodDetails=data;
      console.log("hi"+this.bloodDetails)
      for(var i=0;i<this.bloodDetails.length;i++){
        if((this.bloodDetails[i].state==this.details.state) && (this.bloodDetails[i].district==this.details.dist)){
          console.log(this.bloodDetails[i]);
          this.bloodList.push(this.bloodDetails[i]);
        }
      }
      console.log(this.bloodList);
      
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
