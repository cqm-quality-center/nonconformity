import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NonconformityService } from '../../shared/nonconformity.service';
import { Nonconformity } from '../../shared/nonconformity.model'; 


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [NonconformityService],
})
export class ReportComponent implements OnInit {
  option = this.router.url;
  showSucessMessage: boolean;
  nonconformityCreated = new Nonconformity('', '','',null, '', '', '','');

  constructor( private router: Router, private route: ActivatedRoute, 
                private nonconformityService: NonconformityService) {

                 }

  ngOnInit() {
    console.log(this.option);
    this.nonconformityService.positionEmitted$.subscribe(
      position => {
        this.nonconformityCreated.position = position;
        console.log(this.nonconformityCreated);
      }
    )
    this.nonconformityService.dispositionEmitted$.subscribe(
      disposition => {
        this.nonconformityCreated.disposition = disposition;
        console.log(this.nonconformityCreated);
      }
    )
    this.nonconformityService.documentationEmitted$.subscribe(
      documentation => {
        this.nonconformityCreated.mark = documentation.mark;
        this.nonconformityCreated.part = documentation.part;
        this.nonconformityCreated.um = documentation.um;
        this.nonconformityCreated.amount = documentation.amount;
        this.nonconformityCreated.detail = documentation.detail;
        console.log(this.nonconformityCreated);
      }
    )
    this.nonconformityService.identificationEmitted$.subscribe(
      identification => {
        this.nonconformityCreated.barcodePartModel = identification.barocodePartModel;
        this.nonconformityCreated.barcodePartName = identification.barocodePartName;
        this.nonconformityCreated.barcodeProductionDate = identification.barocodeProductionDate;
        console.log(this.nonconformityCreated);
      }
    )
  }

  onSubmitted() {
    console.log();
  }


  // Nonconformity details
  onPosition() {
    this.router.navigate(['onPosition'], { relativeTo: this.route });
  }

  onIdentification() {
    console.log("onIdentification")
    this.router.navigate(['onIdentification'], { relativeTo: this.route });
  }

  onDocumentation() {
    console.log("onDocumentation")
    this.router.navigate(['onDocumentation'], { relativeTo: this.route });
  }

  onDisposition() {
    console.log("onDisposition")
    this.router.navigate(['onDisposition'], { relativeTo: this.route });
  }

}
