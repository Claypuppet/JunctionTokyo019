import {Component, OnInit} from '@angular/core';
import {SwipeGestureEventData} from 'tns-core-modules/ui/gestures/gestures';
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
  selector: 'ns-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  moduleId: module.id,
})
export class MyProfileComponent implements OnInit {

  constructor(private router: RouterExtensions) {
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {

    if (args.direction === 2) { // Right, to my schedule
      this.router.navigate(['/my-schedule'], {transition: {name: "slideLeft"}, clearHistory: true})
    }
  }
}
