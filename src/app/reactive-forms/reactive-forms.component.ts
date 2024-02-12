import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
constructor(public formbuilder:FormBuilder){}
public formone=this.formbuilder.group({
  firstname:['',Validators.minLength(12)],
  lastname:"",
  email:"",
  password:"",
  box:false
})
submit(){
  console.log(this.formone.controls['firstname'].setValue(''));
  console.log(this.formone.value['firstname']);
  
  
}
}
