import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviorchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviorchild2.component.html',
  styleUrl: './behaviorchild2.component.css'
})
export class Behaviorchild2Component {
  constructor(public behavior:BehaviorService, public routes:Router){}
  public userobj:any={}
  public userarray:any=[]
  public firstname=''
  public message=''
  
ngOnInit(){
  // console.log(this.behavior.getindex());
  console.log(this.behavior.getmychatuser());
  
  
  this.behavior.behavior.subscribe(data=>{
 console.log(data);
 
    this.userobj=data
    console.log(this.userobj);
    
  });
  
}
del(){
let index=JSON.parse(localStorage['setindex'])
this.userarray=this.behavior.getmychatuser()
if(this.userarray.splice(index,1)){
this.routes.navigate([''])
}
localStorage.setItem('mychat_user',JSON.stringify(this.userarray))
console.log(localStorage['mychat_user']);





}
edit(){
  this.userarray=this.behavior.getmychatuser()
  
let index=JSON.parse(localStorage['setindex'])
  console.log(this.userarray);
  let newobj={
    firstname:this.userobj.firstname,
    lastname:this.userobj.lastname,
    age:this.userobj.age,
    username:this.userobj.password,
    userid:this.userobj.userid,
    password:this.userobj.password
  }
  console.log(newobj);
  this.userarray.splice(index,1,newobj)
  if(this.userarray.splice(index,1,newobj)){
this.message='Details updated successfully'
  }

localStorage.setItem('mychat_user',JSON.stringify(this.userarray))
 console.log(localStorage['mychat_user']);

  
  
}
}
