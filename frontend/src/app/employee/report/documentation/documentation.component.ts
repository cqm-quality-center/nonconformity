import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Nonconformity } from '../../../shared/nonconformity.model';
import { NonconformityService } from '../../../shared/nonconformity.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  nonconformity = new Nonconformity ('','','',null,'','','');

  constructor(private nonconformityService: NonconformityService) { }

  ngOnInit() {
    /*this.nonconformities = this.nonconformityService.getNonconformities();
    this.nonconformityService.nonconformitiesChanged
    .subscribe(
      (nonconformities: Nonconformity[]) => {
        this.nonconformities = nonconformities;
      }
    )*/
  }

  onSubmitDefinition(form: NgForm) {
    this.nonconformity = form.value;
    /*this.nonconformityService.addNonconformities(form.value);*/
    this.nonconformityService.documentationNonconformity(this.nonconformity)
    console.log(this.nonconformity);
  }

}
