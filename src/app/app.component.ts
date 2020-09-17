import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms';

  students:{name:string,age:string}[]= [];
  student:{name:string,age:string}={name:'',age:''}
  updateForm:{name:string,age:string}={name:'',age:''}
  selectedStudentIndex

  addStudent(){
    // let temp = {name:this.student.name,age:this.student.age}
    this.students.push({...this.student})
    this.student = {name:'',age:''}
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

  update()
  {
    this.students[this.selectedStudentIndex] = {...this.updateForm}
    this.selectedStudentIndex = null

  }
}

