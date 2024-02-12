import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { log } from 'node:console';
import { Interface } from 'node:readline';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewinstaceComponent } from './viewinstace/viewinstace.component';

interface Student{
  name:string,
  age:number,
  school:string
  }

interface Subject{
  name:string,
  house:number,
  hhh:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,SignupComponent,CommonModule,ViewinstaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public element=true
  public styli='form-control my 2'
public obj={
  firstname:'',
  lastname:'Oyindamola'
}

  title = 'firstclass-app';
  public houses:string|number|any|object=''
  public pr:{
    name:string,
    age:number
  }={
    name:'ghjk',
    age:89
  }
  public y:{

  }[]=[
    {

    }
  ]
  public x:string[]=['hjjj']
  public u:string | number[]=[89]
  public m:string[]=['hjjj']
  public i:Array<number>=[89]

  public name:string='yu'
  public age:number=0
  public house:boolean=true
  public homes:number|string=9
  public  myElementContent:string=''
  public changes='Show'
  public homeobject:Subject={
    name:'hhkk',
    house:78,
    hhh:'kkkk'
  }
  public arrayojj=[{
    name:'oyin',
    house:78,
    hhh:'kkkk'
  },
{
  name:'damola',
  house:76,
  hhh:'kkkk'
}]
private t:undefined;
public aged=null
public school='sqi'
public named:undefined|string;
public boo:boolean=true
public objs:{
  name:string,
  age:number,
 school:string
}={
  name:'Olu',
  age:23,
school:'DQI'
}
public obj1:Student={
  name:'Olu',
  age:23,
school:'DQI'
}
public array:string[]=['Hello everyone!']
public arr:(number|string)[]=[1,2,4,'']
public ar:{
  name:string,
  age:number,
  school:string
}[]=[{
  name:'Olu',
  age:23,
school:'DQI'
},
{
name:'Odun',
  age:23,
school:'SQI'
}]
clicking(){
  this.element=!this.element
 
  
 if(this.element==true){
  this.changes='Hide'
 }
 if(this.element==false){
  this.changes='Show'
 }

}
check(){
  // const confirm=document.getElementById('show')
  
  // const myElement = document.getElementById('myElement');

  // if (myElement) {
  //     // Now TypeScript knows that myElement is not null or undefined within this block
  //     myElement.innerHTML = 'Hello, TypeScript!';
  //     this.myElementContent=myElement.innerHTML
  //     console.log(myElement.innerHTML);
      
  // }
  
  // return 'hello world'
}
public col={
  'background-color':'green',
  'font-size':'100px',
  'margin-top':"50px"
}
public a:any='hello world'

// ngOnInit(){
//  this.name=''
// console.log(this.obj.age,this.age, this.obj.name,this.obj.school, this.array, this.arr, this.ar[1]);

// }
  ngOnInit(){
    const myElement = document.getElementById('myElement');

if (myElement) {
    // Now TypeScript knows that myElement is not null or undefined within this block
    myElement.innerHTML = 'Hello, TypeScript!';
    this.myElementContent=myElement.innerHTML
    console.log(myElement.innerHTML);
    
}
    console.log(this.homeobject.house);
    console.log(this.pr.name);
    
    for (let index = 0; index < this.arrayojj.length; index++) {
     
      console.log(this.arrayojj[index].name);
      
      
    }
    
  }
}
