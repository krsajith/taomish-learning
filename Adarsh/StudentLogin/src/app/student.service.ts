import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:{name:string, id:number, s_class:string, address:string, arrayid:number}[]=[];
  arrId=0;
  AddNewStudent(name:string|null|undefined, id:number, s_class:string, address:string){
    if(name)
    this.students.push({name, id, s_class, address,arrayid:this.arrId+1});
  }
  RemoveStudent(arrayid:number){
    this.students.splice(arrayid,1);
  }

  constructor() { }
}
