import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {SwipeGestureEventData} from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'ns-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css'],
  moduleId: module.id,
})
export class MyScheduleComponent implements OnInit {

  constructor(private router: RouterExtensions) {
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) { // Left, to my schedule
      this.router.navigate(['/my-profile'], {transition: {name: "slideRight"}, clearHistory: true})
    }
    if (args.direction === 2) { // Right, to my schedule
      this.router.navigate(['/medicine-list'], {transition: {name: "slideLeft"}, clearHistory: true})
    }
  }

}
