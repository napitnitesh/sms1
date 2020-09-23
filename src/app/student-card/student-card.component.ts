import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input("student") student
  @Input("index") id 
  updateForm:{name:string,age:string}
  showForm = false

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  delete()
  {
    this.studentService.delete(this.id)
  }

  onUpdate()
  {
    this.showForm=true
    this.updateForm = {...this.student}

  }

  update()
  {
    this.studentService.update(this.id,this.updateForm)
  }

}
