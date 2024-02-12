import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MychatServiceService {
  public user:any={}

  constructor() { }
  receiveuser(data:any){
  this.user=data
  }
  getdata(){
    return this.user
  }
}
