import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Assignment } from './Assignment';
import { ASSIGNMENTS } from './mock-assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(ASSIGNMENTS);
  }

  getAssignment(id: number): Observable<Assignment> {
    return of(ASSIGNMENTS.find(assignment => assignment.id === id));
  }
  
}
