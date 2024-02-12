import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface StudentInterface{
  firstname:string,
 lastname:string,
 age:number,
 address:string,
 password:string
 email:string
}
@Component({
  selector: 'app-testsignup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './testsignup.component.html',
  styleUrl: './testsignup.component.css'
})
export class TestsignupComponent {
constructor(public routes:Router){}
public firstname=''
public lastname=''
public age=0
public address=''
public password=''
public email=''
public message=''
studentsarray:StudentInterface[]=[]

ngOnInit(){
  if(localStorage['teststudents']){
this.studentsarray=JSON.parse(localStorage.getItem('teststudents')!)
  }
  else{
    this.studentsarray=[]
  }
}
signup(){
  let studentobj:StudentInterface={
    firstname:this.firstname,
    lastname:this.lastname,
    age:this.age,
    address:this.address,
    password:this.password,
    email:this.email
  }
  this.studentsarray.push(studentobj)
  localStorage.setItem('teststudents',JSON.stringify(this.studentsarray))
  if( this.studentsarray.push(studentobj)){
    this.routes.navigate(['testsignin'])
  }
  else{
    this.message ='Registration is not successful '
  }
}
}
