import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:{name:string,age:string}={name:'',age:''}

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  addStudent()
  {
    this.studentService.addStudent(this.student)
    this.student={name:'',age:''}
  }

}
