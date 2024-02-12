import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallcontacts',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './viewallcontacts.component.html',
  styleUrl: './viewallcontacts.component.css'
})
export class ViewallcontactsComponent {
  constructor(public routes:Router){}
  public array=[]
  public contactarray:any=[]
ngOnInit(){
this.array=JSON.parse(localStorage['mychat_user'])
console.log(this.array);

let currentindex=localStorage['current_userindex']
console.log(currentindex);


let contacts =this.array.filter((user:any,index)=>index!=currentindex)
  this.contactarray=contacts
  console.log(this.contactarray)


}
goto(i:number){
  this.routes.navigate([`/mychat_dashboard/${i}`])
  
}
}
