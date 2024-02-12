import { Component } from '@angular/core';
import { Behaviorchild1Component } from '../behaviorchild1/behaviorchild1.component';
import { Behaviorchild2Component } from '../behaviorchild2/behaviorchild2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-behaviorparent',
  standalone: true,
  imports: [Behaviorchild1Component,Behaviorchild2Component,CommonModule,FormsModule, RouterLink],
  templateUrl: './behaviorparent.component.html',
  styleUrl: './behaviorparent.component.css'
})
export class BehaviorparentComponent {

}
