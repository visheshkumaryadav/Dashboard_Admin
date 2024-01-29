import { Component } from '@angular/core';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent {
  showContent: { [key: number]: boolean } = {};

  toggleContent(index: number): void {
    // Toggle the visibility of the content for the clicked item
    this.showContent[index] = !this.showContent[index];
  }
}
