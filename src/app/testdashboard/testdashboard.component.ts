import { Component } from '@angular/core';
import { TestserviceService } from '../services/testservice.service';
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
  selector: 'app-testdashboard',
  standalone: true,
  imports: [],
  templateUrl: './testdashboard.component.html',
  styleUrl: './testdashboard.component.css'
})
export class TestdashboardComponent {
constructor(public services:TestserviceService, public routes:Router){}
public student:StudentInterface={
  firstname:'',
  lastname:"",
  email:"",
  age:0,
  password:'',
  address:""
}
public user=''

ngOnInit(){
  this.student=this.services.getstudent()

}
logout(){
localStorage.removeItem('currentstudent')
this.routes.navigate(['testsignin'])
}
}
