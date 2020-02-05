import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NonconformityService } from '../../../shared/nonconformity.service';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {

  constructor(private nonconformityService: NonconformityService) { }

  ngOnInit() {
  }

  
  nonClasses: any[] = [
    { Name: 'Selection', Description: 'Additional selection class description' },
    { Name: 'Finishing', Description: 'Additional finishing class description' },
    { Name: 'Repair', Description: 'Additional repair class description' },
    { Name: 'Override', Description: 'Additional override class description' },
    { Name: 'Alternative use', Description: 'Additional alternative use class description' },
    { Name: 'Utilization', Description: 'Additional utilization class description' },
    { Name: 'Return to the supplier', Description: 'Additional return to the supplier class description' },
    { Name: 'Scarting', Description: 'Additional scarting class description' },
    ];
  nonClass: any;

  setNonconformityClass(form: NgForm) {
    if(!form.value.nonConClassSelected) {
      alert('Please select nonconformity class.');
    } 
    else {
      this.nonClasses.filter(nonClassSelected => {
        if(nonClassSelected.Name==form.value.nonConClassSelected){
          return this.nonClass =  nonClassSelected;
        }
      });
      console.log(this.nonClass);
    } // setNonconformityClass()
    this.nonconformityService.dispositionNonconformity(this.nonClass);
  }


}
