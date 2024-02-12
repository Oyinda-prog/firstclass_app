import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestserviceService } from '../services/testservice.service';
import { TemplatedrivenformComponent } from '../templatedrivenform/templatedrivenform.component';
interface StudentInterface{
  firstname:string,
 lastname:string,
 age:number,
 address:string,
 password:string
 email:string
}
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, TemplatedrivenformComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(public service:TestserviceService){}
  public budgetusers:any=[]
  public errorpagearray:StudentInterface[]=[
    
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
ngOnInit(){
 this.budgetusers=JSON.parse(localStorage['mychat_user'])
 console.log(this.budgetusers);
 
}
senditem(item:any){
  this.service.behavior.next(item)
}
senduser(user:any){
this.service.budgetuser.next(user)
}
}
