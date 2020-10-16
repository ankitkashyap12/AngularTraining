import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';
import { CibilscoreService } from '../cibilscore.service';

@Component({
  selector: 'app-showscore',
  templateUrl: './showscore.component.html',
  styleUrls: ['./showscore.component.css']
})
export class ShowscoreComponent implements OnInit {
  scoreList:CibilScore[];
  showImage='none';
  hidedisabled=true;
  showdisabled=false;
  searchtext='Search by CibilScore';
  // disp='show';
  constructor(private service: CibilscoreService) { }

  ngOnInit() {

    this.service.findAll().subscribe(data => {
      return this.scoreList = data;
    });
  }
handleClick(val: string): void
{
  if (val==='show'){
    this.showImage='inline';
    this.hidedisabled=false;
    this.showdisabled=true;
    
  }
  if(val==="hide")
{
  this.showImage='none';
  this.hidedisabled=true;
    this.showdisabled=false;
} 
}
 // alert('button Clicked '+val);
showAll():void {
  // if(this.showImage==='none')
  if(this.hidedisabled===true)
  {
    this.handleClick('show');
    // this.showImage='inline';
    console.log("inside show all 1st if")
  }
//  if(this.showImage==='inline')
    if(!this.hidedisabled){
    // this.showImage='none';
    console.log("inside show all 2nd if")
    this.handleClick('hide');
  }

}
}

