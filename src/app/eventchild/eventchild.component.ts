import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MychatServiceService } from '../services/mychat-service.service';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventchildComponent {
constructor(public actroute:ActivatedRoute, public currentuser:MychatServiceService, public routes:Router,public changedetector:ChangeDetectorRef){}
@Input() 
public send_to_child:any=[]
public sndparent=''
public msgarray=[]
public parentarray:any=[]
public actualchats:any=[]
receive=''
public dates=new Date()
public userarray:any=[]
public responderid:(undefined|number)
@Output() 
public eventemit=new EventEmitter()
ngOnInit(){
 this.userarray=this.currentuser.getdata()
 console.log(localStorage['current_userindex']);
this.responderid=this.actroute.snapshot.params['index']
console.log(this.responderid);

  if(localStorage['allchats']){
  
    
    this.send_to_child=JSON.parse(localStorage['allchats'])

    
    let currentchat=this.send_to_child.filter((msg:any,index:any)=>msg.currentuserindex==localStorage['current_userindex'] && msg.responderid==this.responderid)
   
    this.actualchats=currentchat
     this.changedetector.detectChanges()
     console.log(this.actualchats);
        
  }

}
parentmsg(){
  this.receive=this.send_to_child
}

send(){
  let obj={
    name:'user2@whatsapp.com',
    time:this.dates,
    msg:this.sndparent
  }
  this.parentarray.push(obj)
  this.eventemit.emit(this.parentarray)
  this.sndparent=''
}

}
