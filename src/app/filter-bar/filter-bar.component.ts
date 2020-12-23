import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  filters: string[] = [];

  constructor(
    public filterService: FilterService
    ) { }

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
  }

  removeFilter(filter: string): void {
    this.filterService.removeFilter(filter);
  }

  clearFilters(): void {
    this.filterService.clearFilters();
  }

}
