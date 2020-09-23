import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:{name:string,age:string}[]= []
  constructor() { }

  update(index,newData)
  {
    this.students[index] = {...newData}
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
}
