import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupserviceService } from '../services/signupservice.service';
import { NewserviceService } from '../services/newservice.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
interface BehaviorInterface{
  id:number,
   name:string,
   city:string,
   status:boolean
 }
 interface StudentInterface{
  firstname:string,
  email:string,
  lastname:string,
  password:string
 }

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgStyle,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor(public routes:Router,  public behavior:NewserviceService, public http:HttpClient){}
  
  public car:undefined|number;
  password=''
  firstname=''
  lastname=''
  email=''
  public behaviorobj:BehaviorInterface={
    id:0,
    name:'',
    city:"",
    status:false
  }
  // public obj :Students={
    //   name:'ruth',
    //   lastname:'oyin',
    //   age:20
    // }
    //inference, union
    // public array3: Students[] = [
      //   { name: '', age: 90, lastname: '' }
      // ];
      public age:string|number='uuiiiiiiiiiii'
      // public array6:Students[]=[{
        //   name:'',
        //   age:90,
        //   lastname:''}
        // ]
        public studentarray: StudentInterface[]=[]
        public array:string[]=['he','she','yui']
        public array2:number[]=[56900000,3457788]
        special=true
        multiplestyles={
          'background-color': 'green',
          'border-radius': '15px',
          'border': '2px solid green'
        }
        element=true
        changes=''
        ngOnInit(){
          this.behavior.behavior.subscribe((data)=>{
            console.log(data);
            this.behaviorobj=data
            
          })
          if(localStorage['students']){
            
    this.studentarray=JSON.parse(localStorage['students'])
    // console.log(this.services.returnstudent());
    
    console.log(this.studentarray);
    
  }
  else{
    this.studentarray=[]
  }
 }
signup(){
  let obj={
  firstname:this.firstname,
  lastname:this.lastname,
  email:this.email,
  password:this.password
  }
this.studentarray.push(obj)
localStorage.setItem('students',JSON.stringify(this.studentarray))
if(localStorage['contacts']){
this.routes.navigate(['signin'])
}
console.log(this.studentarray);

}
hello(){
  this.special=!this.special
}
check(){

}
clicking(){

}
// ngOnInit(){
  // console.log(this.car);
  // this.car=89
  // this.array2=[90,78,678999]
  // console.log(this.car);
  
  // console.log(this.obj.name);
//   for (let index = 0; index < this.array.length; index++) {
//     console.log(this.array[index]);
    
 
//   }
//   for (let index = 0; index < this.array2.length; index++) {
// console.log(this.array2[index]);

    
//   }
  
// }

}
