import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MychatServiceService } from '../services/mychat-service.service';

export const mychatguardGuard: CanActivateFn = (route, state) => {
  // let user_service=inject(MychatServiceService)
  // let currentuser=user_service.getdata()
  let currentuser=JSON.parse(localStorage.getItem('currentuser_id')!)
  let routes=inject(Router)
  if(!currentuser){
routes.navigate(['/mychat_signin'])
  }
  return true;
};
