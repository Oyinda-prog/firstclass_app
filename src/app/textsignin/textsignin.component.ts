import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TestserviceService } from '../services/testservice.service';
interface StudentInterface{
  firstname:string,
 lastname:string,
 age:number,
 address:string,
 password:string
 email:string
}
@Component({
  selector: 'app-textsignin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './textsignin.component.html',
  styleUrl: './textsignin.component.css'
})
export class TextsigninComponent {
constructor(public routes:Router, public services:TestserviceService){}
public email=''
public password=''
public message=''
public studentsarray:StudentInterface[]=[]


ngOnInit(){
this.studentsarray=JSON.parse(localStorage['teststudents'])
}
signin(){
   let student=this.studentsarray.find((student,index)=>student.password==this.password && student.email==this.email)
   if(student){
    localStorage.setItem('currentstudent',JSON.stringify(student))
    console.log(localStorage['currentstudent']);
    
   this.services.receivestudent(student)
  this.routes.navigate(['dashboard'])
   }
   else{
    this.message='No user found'
   }
 }
}
