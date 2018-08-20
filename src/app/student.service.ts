import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
        getStudents(): Observable<Student[]> {
          return of(STUDENTS);
        }

  constructor() { }
}
