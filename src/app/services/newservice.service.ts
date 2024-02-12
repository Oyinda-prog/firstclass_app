import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface BehaviorInterface{
  id:number,
   name:string,
   city:string,
   status:boolean
 }
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
 
  constructor() { }

  public behavior=new BehaviorSubject<BehaviorInterface>({
   id:0,
   name:"",
   city:'',
   status:false 
  })

  public class:(number|string)[]=[45,34,23,46,'iooooo']
  public array:any=[
    {
      id:1,
      name:'oyin',
      age:45,
      school:'sqi'
    },
    {
      id:2,
      name:'Dammy',
      age:67,
      school:'sqi'
    },
    {
      id:3,
      name:'Sewa',
      age:50,
      school:'sqi'
    }
  ]
  public returnarray1(){
    var x=89
    return this.class
  }
  public id=4

  public returnarray(index:number){
    var arrays=JSON.parse(localStorage['contacts'])
    var array=arrays.filter((array:any, i:number)=>i!=index)
    return array
  }
}
