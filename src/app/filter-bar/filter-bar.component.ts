import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Input() filters? : string[];
  @Output() removeFilterParam = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFilter(filter: string) {
    this.removeFilterParam.emit(filter);
  }

}
