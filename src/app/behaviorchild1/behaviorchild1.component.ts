import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behaviorchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorchild1.component.html',
  styleUrl: './behaviorchild1.component.css'
})
export class Behaviorchild1Component {
  constructor(public behavior:BehaviorService){}
  public mychatarray:any=[]

ngOnInit(){
if(localStorage['mychat_user']){
  this.mychatarray=this.behavior.getmychatuser()
}
 for (let index = 0; index < this.mychatarray.length; index++) {
  const element = this.mychatarray[index].firstname;
  console.log(element);
  
  
 }
}
sendchatuser(mychatuser:any,i:number){
this.behavior.behavior.next(mychatuser)
localStorage.setItem('setindex',JSON.stringify(i))
this.behavior.receiveindex(i)
  



}
}
