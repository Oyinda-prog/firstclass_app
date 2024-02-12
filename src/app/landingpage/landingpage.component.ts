import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewserviceService } from '../services/newservice.service';
import { SignupComponent } from '../signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 interface BehaviorInterface{
  id:number,
   name:string,
   city:string,
   status:boolean
 }
interface contactinterface{
  fullname:string,
  email:string,
  phonenumber:string,
  address:string
}
interface DetailsSchema{
  firstname:string,
  lastname:string,
  age:number,
  email:string
}
interface Contact{
  fullname:string,
  email:string,
  address:string,
  phonenumber:string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink,SignupComponent,  HttpClientModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  constructor(public route:Router, public newservice:NewserviceService, public http:HttpClient,public service:NewserviceService){}
  public fullname:string=''
  public address:string=''
  public email=''
  public phonenumber=''

   public fullnames:string=''
  public addresss:string=''
  public emails=''
  public phonenumbers=''
  public contactobject={
   fullname:'',
   address:'',
   email:'',
   phonenumber:''

  }
  public contactobjectupdate={
    fullname:'',
    address:'',
    email:'',
    phonenumber:''
 
   }
   array:any=[] 
   public behaviorarray:BehaviorInterface[]=[{
   id:1,
   name:'Demola',
   city:"Lagos",
   status:true
   },
   {
    id:2,
    name:'Ola',
    city:"London",
    status:false
    },
    {
      id:3,
      name:'John',
      city:"Iwo",
      status:true
      },
      {
        id:1,
        name:'Adekunle',
        city:"Bowen",
        status:true
        }
  ]
   
public index=78
   public contactarray:Contact[]=[]
  ngOnInit(){
    console.log(this.newservice.behavior.subscribe((data:any)=>{
console.log(data);

    }));
    
    console.log(this.newservice.returnarray(this.index));
    this.array=this.newservice.returnarray(this.index)
    
    if(localStorage['contacts']){
    this.contactarray=JSON.parse(localStorage['contacts'])
    }
  }
  
  sendbehavior(behavior:BehaviorInterface){
this.newservice.behavior.next(behavior)
  }
  addcontact(){
  this.contactobject={
    fullname:this.fullname,
    address:this.address,
    email:this.email,
    phonenumber:this.phonenumber
  }
  this.contactarray.push(this.contactobject)
  // console.log(this.contactarray);
  localStorage.setItem('contacts',JSON.stringify(this.contactarray))

  
  }
  delet(){
  //  this.contactarray.splice(index, 1)
//   let filteredarray:Contact[]=[]
//  this.contactarray.map((contact:Contact, index:number)=>{
//     if(index!=i){
//   filteredarray.push(contact)
//   // console.log(filteredarray);
//   this.contactarray=filteredarray
//   localStorage.setItem('contactindex',JSON.stringify(index))
//     }
//   })
  // console.log(filteredarray);
  // let filteredarray=this.contactarray.filter((contact,index)=>index!=i)
  // console.log(filteredarray);
  // this.contactarray=filteredarray
  // console.log(this.contactarray);
  // let filteredarray=this.contactarray.find((contact,index)=>index==i)
  // console.log(filteredarray);
  
  
  }

//   edity(){
// // console.log(i);
// let index=i
// localStorage.setItem('contactindex',JSON.stringify(index))
// // console.log(localStorage['contactindex']);

//   }
check(i:number){
this.route.navigate([`dashboard/${i}`])
}
delety(i:number){
this.newservice.returnarray(i);
this.contactarray=this.newservice.returnarray(i)


localStorage.setItem('contacts',JSON.stringify(this.contactarray))



  // let contacts=this.contactarray.filter((contact,index)=>index!=i)
  // this.contactarray=contacts
  // this.contactarray.splice(i,1)
  // localStorage.setItem('contacts',JSON.stringify(this.contactarray))
}
view(i:number){

}

edity(i:number){
console.log(i);
localStorage.setItem('indexx',JSON.stringify(i))

}
savechange(){
let index=JSON.parse(localStorage['indexx'])
console.log(index);
let update={
  address:this.addresss,
  email:this.emails,
  fullname:this.fullnames,
  phonenumber:this.phonenumbers
}
console.log(update);
this.contactarray.splice(index,1,update)
localStorage.setItem('contacts',JSON.stringify(this.contactarray))


}




savechanges(){
  let index = JSON.parse(localStorage['contactindex'])
  // console.log(index);
  this.contactobjectupdate={
    address:this.addresss,
    email:this.emails,
    phonenumber:this.phonenumbers,
    fullname:this.fullnames
  }
  this.contactarray.splice(index,1,this.contactobjectupdate)
  console.log(this.contactarray)

}
  //typescript-defining the data types
  //string, number,boolean,object, array,undefined

  //inference
  //union
  //interface
   
  //public  private -access modifiers
  //properties 
  //methods
//
  public name:string='SQI'
  private school='ARBC'
   public ages:number= 90
   public special:boolean=false 

   public obj:DetailsSchema={
    firstname:'Ruth',
    lastname:'Ola',
    email:'oyin@gmail.com',
    age:90
   }

   //TYPESCRIPT

  public age:number|string =6778
  private lastname:string|number|boolean=90000
  public firstname:undefined;

//   ngOnInit(){
//     console.log(this.lastname);
    
//     this.lastname=true
     
   
//   console.log(this.lastname);
  
// console.log(this.name);
// console.log(this.school);


//   }

  myname(){
    console.log(this.school);
    
  }

}

