import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 
})
export class SignupserviceService {

  constructor(public api:HttpClient) { }
  public array:number[]=[3,5,6,7,9]
  

  getarray(){
    return this.array
  }
  getlocalarray(){
    let y=JSON.parse(localStorage['contactDetails'])
    return y
  }
  receivedata(data:string){
  let x=data
  return x
  }
  returnstudent(){
    return JSON.parse(localStorage.getItem('students')!)
  }
}
