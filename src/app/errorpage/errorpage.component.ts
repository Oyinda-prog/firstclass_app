import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestserviceService } from '../services/testservice.service';
import { SettingsComponent } from '../settings/settings.component';
interface StudentInterface{
  firstname:string,
 lastname:string,
 age:number,
 address:string,
 password:string
 email:string
}
@Component({
  selector: 'app-errorpage',
  standalone: true,
  imports: [CommonModule,SettingsComponent],
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})
export class ErrorpageComponent {
  constructor(public service:TestserviceService){}
  element=true
  changes=''
  special=false
  public errorpagearray=[
    
      {firstname:'Sewa',
    lastname:'Oketokun',
    age:70,
    address:"IB",
    password:"12345",
    email:"SEWA"
    },

      {firstname:'JOHNSON',
    lastname:'OWOLABI',
    age:34,
    address:"Mosho",
    password:"12C45",
    email:"jay"
    }, 
     
  ]
  sendobj(item:StudentInterface){

  }
  ngOnInit(){
    this.service.behavior.subscribe(data=>{
      console.log(data);
      
    })
  }
check(){

}
clicking(){

}
hello(){}
}
