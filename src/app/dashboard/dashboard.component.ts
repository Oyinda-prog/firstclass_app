import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface contactinterface{
  fullname:string,
  email:string,
  phonenumber:string,
  address:string
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public index:number=0
  public contactarray=[]
  public obj={
    fullname:'',
    email:'',
    address:'',
    phonenumber:''

  }
constructor(public activated:ActivatedRoute){}
ngOnInit(){
  console.log(this.activated.snapshot.params['index']);
  
this.contactarray=JSON.parse(localStorage['contacts'])
  this.index=this.activated.snapshot.params['index']
  console.log(this.contactarray[this.index]);
  this.obj=this.contactarray[this.index]
  
}

logout(){
  localStorage.removeItem(localStorage['currentstudent'])
}
}
