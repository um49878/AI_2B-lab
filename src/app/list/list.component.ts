import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  elements: string[];
  inputTxt: string;

  constructor() {
    this.inputTxt = '';
    this.elements = [];
  }

  ngOnInit(): void {
  }

  addElement(): void{
    this.elements.push(this.inputTxt)
    this.inputTxt='';
  }

  removeElement(id: number): void{
    this.elements.splice(id, 1);
  }

}



