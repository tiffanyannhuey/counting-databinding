import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  runningTotal: number = 0;
  numbersArray = [];

  updateCount(countData: number) {
    console.log('what is this', countData);
    this.runningTotal = countData;
    this.numbersArray.push(countData);
  }
}
