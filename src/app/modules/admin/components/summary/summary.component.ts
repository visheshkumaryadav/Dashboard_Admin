import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']  // Add your styles if needed
})
export class SummaryComponent {
  selectedValue: any;  // You might want to initialize this with a default value
  foods = [
    { value: 'Today', viewValue: 'Today' },
    { value: 'Yesterday', viewValue: 'Yesterday' },
    { value: 'Last 7 days', viewValue: 'Last 7 days' },
    { value: 'Current Month', viewValue: 'Current Month' },
    { value: 'Last Month', viewValue: 'Last Month' },
    // Add more food items as needed
  ];
}
