import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public receiver=''
  @Output() msgemmiter=new EventEmitter<string>
  sendparent=''

  sendtoparent(){
this.msgemmiter.emit(this.sendparent)
  }
}
