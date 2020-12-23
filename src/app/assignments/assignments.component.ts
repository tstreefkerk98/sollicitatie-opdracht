import { Component, OnInit } from '@angular/core';
import { Assignment } from '../Assignment';
import { AssignmentService } from '../assignment.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  allAssignments: Assignment[];
  assignments: Assignment[];
  filters: string[];

  constructor(
    private assignmentService: AssignmentService,
    public filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.getAssignments();
    this.assignments = this.allAssignments.slice();
    this.getFilters();
  }

  getAssignments(): void {
    this.assignmentService.getAssignments().
      subscribe(allAssignments => this.allAssignments = allAssignments);
  }

  getFilters(): void {
    this.filters = this.filterService.getFilters();
  }

  addFilter(filter: string): void {
    this.filterService.addFilter(filter);
  }

}
