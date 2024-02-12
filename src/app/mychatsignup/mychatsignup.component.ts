import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mychatsignup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mychatsignup.component.html',
  styleUrl: './mychatsignup.component.css'
})
export class MychatsignupComponent {
constructor(public formbuilder:FormBuilder, public routes:Router){}
public box=false
public message=''
public userarray:any=[]
public id='Mychat/'+Math.round(Math.random()*30090)+Math.round(Math.random()*100000)
public form1=this.formbuilder.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  age: ['', [Validators.required, Validators.pattern(/^(1[89]|[2-9]\d|\d{3,})$/)]],
  username:['',[Validators.required]],
  password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{5,}$/)]],
  userid:this.id
})
checkbox(){
  this.box=!this.box
  console.log(this.box);
  
}
signup(){
  if(this.box==false){
    this.message='Please, check the box!'
  }
 else{
  if(localStorage['mychat_user']){
this.userarray=JSON.parse(localStorage['mychat_user'])
let array=this.userarray.find((user:any,index:any)=>user.username==this.form1.value['username'])
if(array){
  this.message='This username is already taken, please use a different one!'
}
else{
this.userarray.push(this.form1.value)
localStorage.setItem('mychat_user',JSON.stringify(this.userarray))
if(this.userarray.push(this.form1.value)){
this.routes.navigate(['/mychat_signin'])
}

}

}}
}}
