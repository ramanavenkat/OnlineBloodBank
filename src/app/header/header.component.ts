import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { localizedString } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,private snackBar:MatSnackBar) { }
  head:boolean=true;
  ngOnInit(): void {
    var t=localStorage.getItem('token');
    if(t){
      this.head=false;
    }
  }

  

  log(){
    this.authService.logout().subscribe((data:any) =>{
      console.log(data); 
      if(data.privatemsg=="Logout Successfully"){
        this.snackBar.open(data.privatemsg,'close',{
          duration:3000
        });
        setTimeout(() => {
          localStorage.clear();
          location.href="/login";
        }, 3000);
        
      }
    })
    // localStorage.clear();
    // location.href="/login";
    
  }
}
