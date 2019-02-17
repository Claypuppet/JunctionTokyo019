import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: 'ns-welcome-setup-profile',
  templateUrl: './welcome-setup-profile.component.html',
  styleUrls: ['./welcome-setup-profile.component.css'],
  moduleId: module.id,
})
export class WelcomeSetupProfileComponent implements OnInit {

  constructor(private router: RouterExtensions) {
  }

  ngOnInit() {
  }

  skip() {
    this.router.navigate(['/my-profile'], {transition: {name: "slideLeft"}, clearHistory: true})
  }
}
