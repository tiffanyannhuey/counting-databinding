import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  interval: any;
  currentCount: number = 0;


  constructor() { }

  ngOnInit() {
  }

  startGame(): void {
    console.log('this is clicked');
    this.interval = setInterval(() => this.counter.emit(this.currentCount++), 1000);
  }

  stopGame(): void {
    clearInterval(this.interval);
  }

}
