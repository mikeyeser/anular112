import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
 
  show = true



studentArr :any = []


student = {
  name : "",
  age : null,
  email : "",
  adress : {
    city : "",
    street : "",
    zip : null,
  }
  
}


addstudent(){
  this.studentArr.push(...[this.student])
  console.log(this.studentArr)
}
}
