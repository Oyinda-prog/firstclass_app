import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgetapp',
  standalone: true,
  imports: [],
  templateUrl: './budgetapp.component.html',
  styleUrl: './budgetapp.component.css'
})
export class BudgetappComponent {
constructor(public routes:Router){}
ngOnInit(){
  console.log(this.routes);
  
}
}
