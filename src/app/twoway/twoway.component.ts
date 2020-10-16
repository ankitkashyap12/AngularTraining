import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  city='pune';
  cityList=[];

  constructor() { }

  ngOnInit() {
  }

  addCity():void{

    this.cityList.push(this.city);
  }
}
