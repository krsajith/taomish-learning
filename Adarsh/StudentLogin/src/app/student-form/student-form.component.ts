import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
    form= new FormGroup({
      student: new FormControl('',[Validators.required]),
      id: new FormControl(),
      studentClass :new FormControl(),
      address : new FormControl()
    })

    studentForm(){
      console.log(this.form.value);
    }
    constructor(private studentService:StudentService) { 

    }
    ngOnInit(): void {
    
        
    }
     addStudent(){
      this.studentService.AddNewStudent(this.form.value.student,this.form.value.id,this.form.value.studentClass,this.form.value.address);
     }
}

