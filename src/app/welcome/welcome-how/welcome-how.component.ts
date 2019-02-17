import {Component, OnInit} from '@angular/core';
import {SwipeGestureEventData} from "tns-core-modules/ui/gestures";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: 'ns-welcome-how',
  templateUrl: './welcome-how.component.html',
  styleUrls: ['./welcome-how.component.css'],
  moduleId: module.id,
})
export class WelcomeHowComponent implements OnInit {

  constructor(private router: RouterExtensions) {
    console.log('how');
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {

    if (args.direction === 1) { // Left
      this.router.navigate(['/welcome/what'], {transition: {name: "slideRight"}, clearHistory: true})
    }

    if (args.direction === 2) { // Right
      this.next();
    }
  }

  next() {
    this.router.navigate(['/welcome/setup'], {transition: {name: "slideLeft"}, clearHistory: true})
  }

}
