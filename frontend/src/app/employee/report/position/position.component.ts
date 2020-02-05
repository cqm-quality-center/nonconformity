import { Component, OnInit, Input, Output } from '@angular/core';
import { NonconformityService } from '../../../shared/nonconformity.service';

export interface Position {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  
  selectedPosition: string;

  constructor(private nonconformityService: NonconformityService) { }
  
  ngOnInit() {
    
  }

  positions: Position[] = [
    {value: 'Supplier delivery', viewValue: 'Supplier delivery'},
    {value: 'Milling', viewValue: 'Milling machine'},
    {value: 'Deburring', viewValue: 'Deburring machine'},
    {value: 'Chemical treatmant', viewValue: 'Chemical treatmant machine'},
    {value: 'Boring', viewValue: 'Boring machine'},
    {value: 'Painting', viewValue: 'Painting machine'},
    {value: 'Assembly', viewValue: 'Assembly machine'},
  ];

  onSelectedPositon() {
    this.nonconformityService.positionNonconformity(this.selectedPosition);
  }

}
