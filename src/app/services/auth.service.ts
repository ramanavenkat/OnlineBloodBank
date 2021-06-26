import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  length() {
    throw new Error("Method not implemented.");
  }

  httpOptions = {
    headers: new HttpHeaders({      
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
  constructor(private http:HttpClient) { }

  public generateTocken(loginData:any)
  {
    console.log(loginData);
    return this.http.post(`http://localhost:8080/check`,loginData);
  }
  public registerData(regData:any){
    console.log(regData);
    return this.http.post(`http://localhost:8080/save`,regData);
  }
  // public register

  public loginUser(token:any,Details : any)
  {
    localStorage.setItem('token',token);
    delete Details.password;
    console.log("hi data"+Details);
    localStorage.setItem('Details',JSON.stringify(Details));
    return true;
  }

  public findDetails(details:any){
    console.log(details);
    return this.http.post(`http://localhost:8080/find`,details, this.httpOptions);
  }

  public countBlood(){
    return this.http.get(`http://localhost:8080/count`,this.httpOptions);
  }

  public requestDetails(request:any){
    return this.http.post(`http://localhost:8080/request`,request,this.httpOptions)
  }

  public getDetails(){
    return this.http.get(`http://localhost:8080/getData`,this.httpOptions);
  }
  public scrollData(){
    return this.http.get(`http://localhost:8080/scroll`,this.httpOptions);
  }
  public logout(){
    return this.http.get(`http://localhost:8080/logout`,this.httpOptions);
  }
  public users(){
    return this.http.get(`http://localhost:8080/aUser`,this.httpOptions);
  }
  public getCount(){
    return this.http.get(`http://localhost:8080/getAdmin`,this.httpOptions);
  }
  public dataDelete(id:any){
    return this.http.delete(`http://localhost:8080/deleted/${id}`,this.httpOptions);
  }
}
