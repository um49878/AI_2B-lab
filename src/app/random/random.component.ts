import { Component, Input, OnInit } from '@angular/core';
import {RandomService} from "../random.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{

  myNumber!: number;
  @Input() max = 10;

  constructor(private randomService: RandomService){}

  ngOnInit(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  onCLick() {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isLowerHalf(): boolean{
    return this.myNumber <= this.max /2;
  }
}
