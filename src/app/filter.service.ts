import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filters: string[] = [];

  getFilters(): string[] {
    return this.filters;
  }

  addFilter(filter: string): void {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
    }
  }

  removeFilter(filter: string): void {
    if (this.filters.includes(filter)) {
      const index = this.filters.indexOf(filter, 0);
      if (index > -1) {
        this.filters.splice(index, 1);
      }
    }
  }

  clearFilters(): void {
    const size = this.filters.length;
    this.filters.splice(0, size);
  }
}
