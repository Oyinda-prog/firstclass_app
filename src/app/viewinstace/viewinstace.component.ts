import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { SignupserviceService } from '../services/signupservice.service';
interface DetailsSchema{
  Firstname:string,
  Lastname:string,
  Address:string,
  Email:string,
  Phoneno:string
}

@Component({
  selector: 'app-viewinstace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewinstace.component.html',
  styleUrl: './viewinstace.component.css'
})
export class ViewinstaceComponent {
  
myVariable:string='Oyinfamola Ruth'
array:DetailsSchema[]=[]
special:boolean=true
changes(){
  this.special=!this.special
  // console.log(this.myVariable);
  
}
constructor(public routing:Router,public signupservice:SignupserviceService){}


ngOnInit(){
  console.log(this.signupservice.getarray());
  console.log(this.signupservice.getlocalarray());
  this.array=this.signupservice.getlocalarray()
  
}
checks(){
  this.signupservice.receivedata(this.myVariable)
  console.log(this.signupservice.receivedata(this.myVariable));
  
  // console.log(this.routing);
  //  this.routing.navigate(['dashboard/signup/signin/login'])
}

}
