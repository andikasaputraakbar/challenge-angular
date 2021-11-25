import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  content = 'Secret Password = tuna';
  isContentVisible = false;
  togglingLog = [] as any;
  limit = 5;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    const timestamp = new Date().getTime();
    this.togglingLog.push(timestamp);
    this.isContentVisible = !this.isContentVisible;
  }

  getColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }
}

