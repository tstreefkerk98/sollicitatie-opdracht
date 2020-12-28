import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../Assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  @Input() assignment?: Assignment;
  @Output() addFilterParam = new EventEmitter<string>();
  filters: string[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  addFilter(filter: string): void {
    this.addFilterParam.emit(filter);
  }
}