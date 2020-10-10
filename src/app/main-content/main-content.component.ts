import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  constructor(private launchService: LaunchService) {}
  missionDetails: any[];
  ngOnInit(): void {
    this.launchService.getAllLaunches().subscribe((data) => {
      this.missionDetails = data;
      console.log(this.missionDetails);
    });
  }
}
