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
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {
    console.log("Swipe!");
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Swipe Direction: " + args.direction);

    if (args.direction === 2) { // Right
      this.next();
    }
  }

  next() {
    this.router.navigate(['/welcome/how'], {transition: {name: "slideLeft"}, clearHistory: true})
  }

}
