import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface FilterValues { year: string, launchStatus: boolean, landStatus: boolean}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor() {}
  @Output() filterData = new EventEmitter<FilterValues>();
  filterValues: FilterValues = {
    year: "",
    landStatus: undefined,
    launchStatus: undefined
  }

  @Input() yearsList: string[];


  ngOnInit(): void {
    console.log(this.yearsList);
  }

  setYear(year: string) {
    this.filterValues.year = year;
    this.filterValues.landStatus = undefined;
    this.filterValues.launchStatus = undefined;
    this.setFilterStatus();
  }

  setLaunchStatus(status: boolean) {
    this.filterValues.launchStatus = status;
    this.filterValues.landStatus = undefined;
    this.setFilterStatus();
  }

  setLandStatus(status: boolean) {
    this.filterValues.landStatus = status;
    this.setFilterStatus();
  }
  
  setFilterStatus() {
    this.filterData.emit(this.filterValues);
  }

}
