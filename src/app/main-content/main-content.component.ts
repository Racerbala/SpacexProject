import { Component, Input, OnInit } from '@angular/core';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  constructor() {}
  @Input() missionDetails: any[];
}
