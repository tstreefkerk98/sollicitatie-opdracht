import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Filters: string[] = [];
  AllAssignments: Assignment[] = [];
  Assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignmentService.getAssignments().
      subscribe(res => this.Assignments = res);
    this.AllAssignments = this.Assignments.slice();
  }

  addFilter(filter: string) {
    this.Filters.push(filter);
    this.filter();
  }

  removeFilter(filter: string) {
    if (filter === "all") {
      this.Filters = [];
    } else {
      const index = this.Filters.indexOf(filter, 0);
      if (index > -1) {
        this.Filters.splice(index, 1);
      }
    }
    this.filter();
  }

  filter(): void {
    var i: number;
    var filteredAssignments = this.AllAssignments.slice();
    for (i = 0; i < this.Filters.length; i++) {
      var filter = this.Filters[i];

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
    this.Assignments = filteredAssignments;
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
