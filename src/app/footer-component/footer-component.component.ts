import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  footer:Footer={designedBy:"Ankit",copyright:"Subject to copyright",email:"anki@abc.com"}
  constructor() { }

  ngOnInit() {
  }

}
