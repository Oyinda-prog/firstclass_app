import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface StudentInterface{
  firstname:string,
  email:string,
  lastname:string,
  password:string
 }
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
password=''
email=''
studentarray:StudentInterface[]=[]
ngOnInit(){
  this.studentarray=JSON.parse(localStorage['students'])
  console.log(this.studentarray);
  
}
constructor(public route:Router){}
signin(){
let student=this.studentarray.find((student,index)=>this.email==student.email && this.password==student.password)
if(student){
  localStorage.setItem('currentstudent',JSON.stringify(student))
  this.route.navigate(['dashboard'])
}
else{
  console.log('no student found');
  
}

  
}
}
