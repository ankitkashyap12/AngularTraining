import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchLabel:string;
  textcolor='yellowText';
  border='thickBorder';
  showColor=true;
  showBorder=true;
  constructor() {

    console.log('inside constructor '+this.searchLabel);
   }

  ngOnInit() {
    console.log('inside init '+this.searchLabel);
  }
   change(){
  this.showBorder= !this.showBorder;
  this.showColor= !this.showColor;

  }

}
