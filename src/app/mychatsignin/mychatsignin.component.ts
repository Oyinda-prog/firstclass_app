import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MychatServiceService } from '../services/mychat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mychatsignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mychatsignin.component.html',
  styleUrl: './mychatsignin.component.css'
})
export class MychatsigninComponent {
  constructor(public mychatservice:MychatServiceService, public routes:Router){}
public username=''
public password=''
public userarray=[]
public message=''
ngOnInit(){
  this.userarray=JSON.parse(localStorage['mychat_user'])
}
signin(){
  console.log(this.username);
  
  this.userarray.find((user:any,index)=>{
    if(user.username==this.username){
      this.message=''
      if(user.password==this.password){
        localStorage.setItem('current_userindex',JSON.stringify(index))
      this.mychatservice.receiveuser(user)
      localStorage.setItem('currentuser_id',JSON.stringify(user. userid))
      this.routes.navigate(['/mychat_dashboard'])
      console.log(this.mychatservice.getdata());  
      }
      else{
        this.message='invalid password entered';
      }
    }
    else{
      this.message='Username does not exist'
    }
  })
}
}
