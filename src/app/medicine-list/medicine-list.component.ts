import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {SwipeGestureEventData} from 'tns-core-modules/ui/gestures/gestures';
import {DrugApiService} from "~/core/services/DrugApi.service";

@Component({
  selector: 'ns-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  moduleId: module.id,
})
export class MedicineListComponent implements OnInit {
  suggestions: string[];

  constructor(private router: RouterExtensions, private drugApiService: DrugApiService) {
  }

  ngOnInit() {
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 1) { // Left, to my schedule
      this.router.navigate(['/my-schedule'], {transition: {name: "slideRight"}, clearHistory: true})
    }
    if (args.direction === 2) { // Right, to my schedule
      this.router.navigate(['/camera-medicine'], {transition: {name: "slideLeft"}, clearHistory: true})
    }
  }

  onTextChanged(event): void {
    if (event.value.length > 0) {
      this.drugApiService.searchDrugs(event.value).subscribe(response => {
        this.suggestions = response.suggestions;
      });
    }
  }

  onSubmit(event): void {

  }

  onItemTap(event): void {

  }
}
