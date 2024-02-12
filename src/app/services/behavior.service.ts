import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  public behavior=new BehaviorSubject({
  firstname:"",
  lastname:"",
  username:'',
  password:'',
  userid:"",
  age:""
})
public index:any;
constructor() { }

receiveindex(data:any){
this.index=data
}

getindex(){
  return this.index
}

getmychatuser(){
 return JSON.parse(localStorage['mychat_user'])
  }
}
