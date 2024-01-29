import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
//import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedStep: number = 1;
  private autoProgressSubscription: Subscription | undefined;

  ngOnInit(): void {
    // Start auto-progressing logic on component initialization
    this.startAutoProgress();
  }

  ngOnDestroy(): void {
    // Cleanup subscription to avoid memory leaks
    if (this.autoProgressSubscription) {
      this.autoProgressSubscription.unsubscribe();
    }
  }

  private startAutoProgress(): void {
    const intervalDuration = 1000; // Set the interval duration in milliseconds (e.g., 3000 ms = 3 seconds)

    this.autoProgressSubscription = interval(intervalDuration).subscribe(() => {
      // Increase the selectedStep automatically
      this.selectedStep = (this.selectedStep % 4) + 1; // Cycle through steps 1 to 4

      // Check if the current step is the last step (4 in this case)
      if (this.selectedStep === 4) {
        // If it is the last step, unsubscribe to stop further progression
        if (this.autoProgressSubscription) {
          this.autoProgressSubscription.unsubscribe();
        }
      }
    });
  }
}