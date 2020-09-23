import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms';

  students:{name:string,age:string}[]= [];
  updateForm:{name:string,age:string}={name:'',age:''}
  selectedStudentIndex

  constructor(public studentService:StudentService){
    this.students = this.studentService.students
  }

  addStudent(student){
    console.log(student)
    // let temp = {name:this.student.name,age:this.student.age}
    this.students.push({...student})
    console.log(this.students)
  }

  delete(i){
    this.students.splice(i,1)
  }

  onUpdate(i)
  {
    this.selectedStudentIndex = i
    this.updateForm = {...this.students[i]}
  }

  update(event)
  {
    console.log(event)
    this.students[event.index] = {...event.newData}
    this.selectedStudentIndex = null
  }
}

