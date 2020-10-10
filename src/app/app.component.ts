import { Component, OnInit } from '@angular/core';
import { LaunchService } from './services/launch.service';
import { FilterValues } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private launchService: LaunchService){}
  title = 'spacex-project';
  missionDetails: any[];
  yearsList: string[];

  ngOnInit(): void {
    this.launchService.getAllLaunches().subscribe((data) => {
      this.missionDetails = data;
      const yearsList = data.map(el => el.launchYear);
      this.yearsList = yearsList.filter((el, index, arr) => arr.indexOf(el) == index);
    });
  }

  getDataByFilter(data: FilterValues) {
    this.launchService.getDataByFilter(data).subscribe((data) => {
      this.missionDetails = data;
    });
  }

}
