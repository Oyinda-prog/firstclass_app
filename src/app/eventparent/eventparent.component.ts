import { Component, Output } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MychatServiceService } from '../services/mychat-service.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent, FormsModule,CommonModule,HttpClientModule, RouterLink,RouterOutlet],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
public send_to_child=''
public receivedata=''
public msgarray:any=[]
receives=''
public dates= new Date()
public receivearray:any=[]
public userarray:any={}
public responderid:(undefined|number);
constructor(public http:HttpClient, public currentuser:MychatServiceService, public routes:Router, public actroute:ActivatedRoute){}
ngOnInit(){
  console.log( this.currentuser.getdata());
 this.userarray=this.currentuser.getdata()
 console.log(this.userarray.firstname);
 if(this.userarray.firstname==undefined){
  this.routes.navigate(['/mychat_signin'])
 }

  console.log(localStorage['current_userindex']);
console.log(  this.actroute.snapshot.params['index']);
this.responderid=this.actroute.snapshot.params['index']
console.log(this.responderid);
if(localStorage['allchats']){
  this.msgarray=JSON.parse(localStorage['allchats'])
}
  
}
sendmsg(){
  let obj={
    msg:this.send_to_child,
    time:this.dates,
    name:this.userarray.firstname,
    username:this.userarray.firstname,
    currentuserindex:localStorage['current_userindex'],
    responderid:this.responderid
  }
  console.log(obj.username);
  
  // this.http.post('http://localhost/practicefolder/eventparent.php',obj).subscribe((data:any)=>{
  //   console.log(data);
    
  // })
  this.msgarray.push(obj)
  //  console.log(this.msgarray);
   localStorage.setItem('allchats',JSON.stringify(this.msgarray))
   console.log(localStorage['allchats']);
   
   this.send_to_child=''
  
  // this.receives=this.send_to_child
}
receive(data:any){
this.receivearray=data
}
logout(){
  localStorage.removeItem('currentuser_id')
  this.routes.navigate(['mychat_signin']) 
}
}
