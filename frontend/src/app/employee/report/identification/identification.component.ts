import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

/*import { Barcode } from '../../models/barcode.model';*/
import { BarcodeService } from '../../../shared/barcode.service';
/*import { stringify } from '@angular/compiler/src/util';*/
import { Nonconformity } from '../../../shared/nonconformity.model';
import { NonconformityService } from '../../../shared/nonconformity.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css'],
  providers: [BarcodeService]
})
export class IdentificationComponent implements OnInit {

  @ViewChild(BarecodeScannerLivestreamComponent, { static: false }) barecodeScanner: BarecodeScannerLivestreamComponent;
  
  nonconformity = new Nonconformity ('','','',null,'','','');

  barcodeValue;

  barcodeData;

  partModel: string;
  partName: string;
  partProduction: string;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  constructor(private barcodeService: BarcodeService, private nonconformityService: NonconformityService) { }

  ngOnInit() {
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
    this.barecodeScanner.onProcessed(result);
  }

  onGetBarcodeData(): void {
    if(!this.barcodeValue){
      alert("Barcode has not been recognized. Please try again.")
    }
    else
    {
      console.log("Unconformoty product has the barcode " + this.barcodeValue);
      const partCode = this.barcodeValue;
      this.barcodeService.getBarcode(partCode)
        .then( res => {
          this.barcodeData =  res;
          //console.log(this.barcodeData);
          this.partModel = this.barcodeData[0].partModel;
          this.partName = this.barcodeData[0].partName;
          this.partProduction = this.barcodeData[0].partProduction;
          this.nonconformity.barcodePartModel = this.partModel;
          this.nonconformity.barcodePartName = this.partName;
          this.nonconformity.barcodeProductionDate = this.partProduction;
          this.nonconformityService.identificationNonconformity(this.nonconformity);
        },
        error => {
          console.log(error);
        }); 
      }  
    }
}
