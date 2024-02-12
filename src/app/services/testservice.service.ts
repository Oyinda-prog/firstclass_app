import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface StudentInterface{
  firstname:string,
 lastname:string,
 age:number,
 address:string,
 password:string
 email:string
}
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

public budgetuser=new BehaviorSubject({
  first_name:"",
  last_name:"",
  email:"",
  phonenumber:"",
  age:'',
  address:""
})

  public behavior=new BehaviorSubject<StudentInterface[]>(
   [
    {firstname:'Oyinlola',
  lastname:'James',
  age:40,
  address:"Lagos",
  password:"12345",
  email:"3456"
  }
  
   ]
  )
  public student:StudentInterface={
    firstname:'',
    lastname:"",
    email:"",
    age:0,
    password:'',
    address:""
  }

  constructor() { }
 test(){
 return JSON.parse(localStorage['teststudents'])
  }
  receivestudent(data:StudentInterface){
    this.student =data
  }
  getstudent(){
    return this.student
  }
}
