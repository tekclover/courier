import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { ConsignorService } from '../../../master/consignor/consignor.service';
import { CustomerService } from '../../../master/customer/customer.service';
import { ConsignmentService } from '../../../operation/consignment/consignment.service';
import { PreAlertEditpopupComponent } from '../pre-alert-editpopup/pre-alert-editpopup.component';

@Component({
  selector: 'app-pre-alert-update',
  templateUrl: './pre-alert-update.component.html',
  styleUrl: './pre-alert-update.component.scss'
})
export class PreAlertUpdateComponent {
  partnerType: any[] = []
  active: number | undefined = 0;

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private customerService: CustomerService,
    private consignorService: ConsignorService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    private el: ElementRef,
    public dialog: MatDialog,
  ) {
  }

  pageToken: any;

  form = this.fb.group({
    companyId: [this.auth.companyId, Validators.required],
    languageId: [this.auth.languageId, Validators.required],
    partnerHouseAirwayBill: [],
    partnerMasterAirwayBill: [],
    statusText: [],
  })

  submitted = false;

  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Mid-Mile', 'Pre Alert Manifest', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.partnerMasterAirwayBill.disable();
      this.form.controls.partnerHouseAirwayBill.disable();
    }
  }

  cols: any[] = [];
  target: any[] = [];
  callTableHeader() {
    this.cols = [
      { field: 'companyName', header: 'Company' },
      // { field: 'partnerMasterAirwayBill', header: 'Partner MAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'partnerType', header: 'Partner Type' },
      { field: 'partnerId', header: 'Partner ID' },
      { field: 'flightNo', header: 'Flight No' },
      { field: 'flightName', header: 'Flight Name' },
      { field: 'estimatedTimeOfDeparture', header: 'Departure Time', format: 'date' },
      { field: 'estimatedTimeOfArrival', header: 'Arrival Time', format: 'date' },
      { field: 'bayanHv', header: 'Bayan HV' },
      { field: 'shipper', header: 'Shipper Name' },
      { field: 'consigneeName', header: 'Consignee Name' },
      { field: 'incoTerm', header: 'Inco Terms' },
      { field: 'hsCode', header: 'HS Code' },
      { field: 'countryOfOrigin', header: 'Origin Port' },
      { field: 'goodsDescription', header: 'Description' },
      { field: 'iataId', header: 'IATA' },
      { field: 'numberOfPieces', header: 'Number of pieces' },
      { field: 'totalShipmentWeight', header: 'Total Shipment Weight' },
      { field: 'consignmentValue', header: 'Total Value' },
      { field: 'consignmentValueLocal', header: 'ConsignmentValueLocal' },
      { field: 'consignmentCurrency', header: 'Currency' },

      { field: 'eventText', header: 'Event' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
    ];
  }



  preAlertManifestTableArray: any[] = [];
  selectedPreAlertManifest: any[] = [];

  fill(line: any) {
    this.form.patchValue(line);
    this.callTableHeader();

    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.partnerMasterAirwayBill = [this.pageToken.line.partnerMasterAirwayBill];

    this.service.searchPrealert(obj).subscribe({
      next: (res: any) => {
        this.preAlertManifestTableArray = res;
        this.spin.hide();
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    })
  }



  // PreAlert Edit Table Popup 

  editItem(data: any, item: any): void {
    const dialogRef = this.dialog.open(PreAlertEditpopupComponent, {
      disableClose: true,
      width: '70%',
      //height: '50%',
      maxWidth: '82%',
      position: { top: '2.5%', left: '30%' },
      data: { pageflow: data, code: item },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fill(this.pageToken.line);
    });
  }
}
