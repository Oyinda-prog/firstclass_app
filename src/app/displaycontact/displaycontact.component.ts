import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


interface Contact{
  fullname:string,
  email:string,
  address:string,
  phonenumber:string
}
@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
  constructor(public route:ActivatedRoute, public rou:Router){}
  public special=true
  public user:Contact={
fullname:'',
email:'',
address:'',
phonenumber:''
  }
  public isError=true
  public color={
    'background-color':'yellow',
    'color':'black'
  }
  getStyle() {
    return {
      'color': this.isError ? 'red' : 'green',
      'font-size': '16px'
    };
  }
  
ngOnInit(){
 let itemarray =JSON.parse(localStorage['contacts']) 
 console.log(itemarray);
//  console.log(this.route.snapshot.params);
 
 let index= this.route.snapshot.params['index']
 console.log(index);
 let user=itemarray[index]
//  console.log(user);
 this.user=user
 console.log(this.user);
 
 
}
check(){
  this.special=false
// this.rou.navigate([''])

}

}
