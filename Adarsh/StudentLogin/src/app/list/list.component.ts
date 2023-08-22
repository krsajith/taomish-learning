import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  students:{name:string, id:number, s_class:string, address:string,arrayid:number}[]=[];
  constructor(private studentService:StudentService) { 

  }
  ngOnInit(): void {
      this.students= this.studentService.students
  }
  removeRow(arrayid:number){
    this.studentService.RemoveStudent(arrayid);
   }
}
