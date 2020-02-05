import { Component, OnInit } from '@angular/core';
import { Nonconformity } from '../../shared/nonconformity.model';

 
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  nonconformitySelected = false;
  nonconformitySelectedMark: string;

  nonconformities =  [new Nonconformity('1657774C','','',null,'','','Front bumper inadequate material','',['',''],'','',''), 
                      new Nonconformity('1657774A','Bumper','quantity',20,'','','Rear bumper dimension mismatch','Assembly machine',['Alternative use','Use NC products for purposes other than originally defined.'],'1657774A','Rear bumper','20-01-2020'),
                      new Nonconformity('1657774B','','',null,'','','Side bumper inadequate color','',['',''],'','','')]

  constructor() { }

  ngOnInit() {
  }

  selectedNonconformity( selectedNonconformityMark: string) {
    this.nonconformitySelected = true;
    this.nonconformitySelectedMark = selectedNonconformityMark;
    this.nonconformities.find(nonconformity => nonconformity.mark == selectedNonconformityMark);
  }

}
