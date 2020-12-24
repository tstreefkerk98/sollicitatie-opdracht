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
    private filterService: FilterService
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
    if (!this.filters.includes(filter)) {
      this.filterService.addFilter(filter);
      // this.filter();
    }
  }

  filter(): void {
    var i: number;
    for (i = 0; i < this.filters.length; i++) {
      var filter = this.filters[i];
      var filteredAssignments = this.allAssignments.slice();

      var j = 0;
      while (j < filteredAssignments.length) {
        var assignment = filteredAssignments[j];

        if (!this.getFilterParameters(assignment).includes(filter)) {
          filteredAssignments.splice(j, 1);
        } else {
          j++;
        }
      }
    }
    this.assignments = filteredAssignments;
  }

  getFilterParameters(assignment: Assignment): string[] {
    var filterParameters: string[] = [];

    filterParameters.push(assignment.level);
    filterParameters.push(assignment.role);

    var i: number;
    for (i = 0; i < assignment.languages.length; i++) {
      filterParameters.push(assignment.languages[i]);
    }

    var j: number;
    for (j = 0; j < assignment.tools.length; j++) {
      filterParameters.push(assignment.tools[i]);
    }

    return filterParameters;
  }
}