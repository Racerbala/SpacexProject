import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() launchYear: string;
  @Input() image: string;
  @Input() missionId: string[];
  @Input() launchSuccess: boolean;
  splitId: string;
  constructor() {}

  ngOnInit(): void {
    // this.splitId = this.missionId.toString();
  }
}
