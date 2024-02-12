import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TestserviceService } from '../services/testservice.service';

export const testguardGuard: CanActivateFn = (route, state) => {
  let routes =inject(Router)
  let service=inject(TestserviceService)
  let user=JSON.parse(localStorage.getItem('currentstudent')!)
  // let user= service.getstudent()
  if (!user){
    
    routes.navigate(['/testsignin'])

  }
  
   return true
  
};
