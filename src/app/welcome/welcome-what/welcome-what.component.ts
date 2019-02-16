import {Component, OnInit} from '@angular/core';
import {SwipeGestureEventData} from "tns-core-modules/ui/gestures";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: 'ns-welcome-what',
  templateUrl: './welcome-what.component.html',
  styleUrls: ['./welcome-what.component.css'],
  moduleId: module.id,
})
export class WelcomeWhatComponent implements OnInit {

  constructor(private router: RouterExtensions) {
    console.log('what');
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {

    if (args.direction === 2) { // Right
      this.router.navigate(['/welcome/how'])
    }
  }

}
