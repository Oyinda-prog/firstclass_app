import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestserviceService } from '../services/testservice.service';
import { log } from 'console';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
  constructor(public formbuilder:FormBuilder, public serv:TestserviceService){}
firstname=''
email=''
password=''
lastname=''
public school=''
public confirm=false
public item:any={}
public budget:any={}

public rform=this.formbuilder.group({
 lname:['',Validators.required]
})
ngOnInit(){
  this.serv.behavior.subscribe(data=>{
    console.log(data);
this.item=data
    
  })
  this.serv.budgetuser.subscribe(result=>{
    console.log(result);
    this.budget=result
    console.log(this.budget.firstname);
    
    
  })
}
update(){
  let budgetarray=JSON.parse(localStorage['mychat_user'])
  let obj={
  first_name:this.budget.first_name,
  last_name:this.budget.last_name,
  age:this.budget.age,
  address:this.budget.address,
  phonenumber:this.budget.phonenumber,
  email:this.budget.email
  }
  console.log(obj);
  
 
}
change(){
  this.confirm=!this.confirm
  console.log(this.confirm)
}
submit(){
  console.log(this.rform.value.lname);
  

}
}
