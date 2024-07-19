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
    this.partnerType = [
      { value: 'customer', label: 'Customer' },
      { value: 'consignor', label: 'Consignor' },
    ];
  }

  OriginDetails = this.fb.group({
    name: [],
    companyName: [],
    country: [],
  });

  DestinationDetails = this.fb.group({
    name: [],
    companyName: [],
    country: [],
  });

  pageToken: any;

  form = this.fb.group({
    companyId: [this.auth.companyId, Validators.required],
    languageId: [this.auth.languageId, Validators.required],
    partnerHouseAirwayBill: [],
    partnerMasterAirwayBill: [],
    originDetails: this.OriginDetails,
    destinationDetails: this.DestinationDetails,
    goodsDescription: [],
    consigneeName: [],
    incoTerm: [],
    shipperName: [],
    description: [],
    weight: [,],
    consignmentValue: [],
    consignmentValueLocal: [],
    masterAirwayBill: [],
    houseAirwayBill: [],
    consignmentCurrency: [],
    currency: [],
    airportDestinationCode: [],
    hsCode: [],
    noOfPieces:[],
    iata: [],
    flightNo: [],
    flightName: [],
    bayanHv: [],
    partnerType: ['',],
    countryOfOrigin: [],
    originCode: [],
    origin: [],
    countryOfDestination: [],
    estimatedTimeOfArrival: [],
    estimatedTimeOfArrivalFE:  [new Date,],
    estimatedDepartureTime: ['',],
    estimatedDepartureTimeFE: [new Date,],
    noOfPackageMawb: [],
    noOfCrt: [],
    totalWeight: [],
    totalShipmentWeight: [],
    totalValue: [],
    createdOn: ['',],
    createdBy: [],
    updatedBy: [],
    updatedOn: ['',],
    partnerId: ['', Validators.required]
  })

  submitted = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorHandling(control: string, error: string = "required") {
    const controlInstance = this.form.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return ' Field should not be blank';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Mid-Mile', 'Pre Alert Manifest', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.partnerMasterAirwayBill.disable();
      this.form.controls.partnerHouseAirwayBill.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
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

  companyIdList: any[] = [];
  languageIdList: any[] = [];
  iataIdList: any[] = [];
  countryIdList: any[] = [];
  customerIdList: any[] = [];
  currencyIdList: any[] = [];
  hsCodeList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.currency.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.iata.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url,


    ]).subscribe({
      next: (results: any) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.languageIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.language.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.currencyIdList = this.cas.foreachlist(results[3], this.cas.dropdownlist.setup.currency.key);
        this.hsCodeList = this.cas.forLanguageFilterWithoutKey(results[4], this.cas.dropdownlist.setup.hsCode.key);
        this.iataIdList = this.cas.forLanguageFilterWithoutKey(results[5], this.cas.dropdownlist.setup.iata.key);
        const consitnor = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[7], this.cas.dropdownlist.setup.customer.key);
        customer.forEach(x => this.customerIdList.push(x));
        consitnor.forEach(x => this.customerIdList.push(x));
        this.customerIdList = this.cs.removeDuplicatesFromArrayList(this.customerIdList, 'value')

        this.spin.hide();
      },
      error: (err: any) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });

  }

  preAlertManifestTableArray: any[] = [];
  selectedPreAlertManifest: any[] = [];

  fill(line: any) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
    if (this.form.controls.estimatedDepartureTime.value) {
      this.form.controls.estimatedDepartureTimeFE.patchValue(this.cs.pCalendar(this.form.controls.estimatedDepartureTime.value));
    }
    if (this.form.controls.flightArrivalTime.value) {
      this.form.controls.flightArrivalTimeFE.patchValue(this.cs.pCalendar(this.form.controls.flightArrivalTime.value));
    }
    this.partnerTypeChanged();
    this.callTableHeader();

    let obj: any = {};
    obj.languageId = [this.auth.languageId];
    obj.companyId = [this.auth.companyId];
    obj.partnerMasterAirwayBill = [this.pageToken.line.partnerMasterAirwayBill];
    // obj.partnerHouseAirwayBill = [this.pageToken.line.partnerHouseAirwayBill];

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

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      for (const control in this.form.controls) {
        const controlInstance = this.form.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }
    if (this.form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', key: 'br', detail: 'Please fill required fields to continue' });
      return;
    }
    const date = this.cs.jsonDate(this.form.controls.estimatedDepartureTimeFE.value)
    this.form.controls.estimatedDepartureTime.patchValue(date)
    if (this.pageToken.pageflow != 'New') {
      this.spin.show()
      this.service.UpdatePreAlertManifest([this.form.getRawValue()]).subscribe({
        next: (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res[0].partnerHouseAirwayBill + ' has been updated successfully' });
          this.router.navigate(['/main/airport/preAlertManifest']);
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } else {
      this.spin.show()
      this.service.Create([this.form.getRawValue()]).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: ' has been created successfully' });
            this.router.navigate(['/main/airport/preAlertManifest']);
            this.spin.hide();
          }
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }
  }
  shipperType: any;
  partnerTypeChanged() {
    if (this.form.controls.partnerType.value == "customer") {
      let obj: any = {};
      obj.companyId = [this.auth.companyId];

      this.customerIdList = [];
      this.spin.show();
      this.customerService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: 'customerId', value: 'customerName' });
          this.shipperType = "Customer";
          this.form.controls.shipperName.patchValue(this.shipperType)
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } else {
      let obj: any = {};
      obj.companyId = [this.auth.companyId];

      this.customerIdList = [];
      this.spin.show();
      this.consignorService.search(obj).subscribe({
        next: (result) => {
          this.customerIdList = this.cas.foreachlist(result, { key: 'consignorId', value: 'consignorName' });
          this.shipperType = "Consignor";
          this.form.controls.shipperName.patchValue(this.shipperType)
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })

    }
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
      if (result) {
        this.preAlertManifestTableArray.splice(item, 0);
        this.preAlertManifestTableArray.splice(item, 1, result);
        this.preAlertManifestTableArray = [...this.preAlertManifestTableArray]

        this.submitted = true;
        if (this.form.invalid) {
          this.messageService.add({ severity: 'error', summary: 'Error', key: 'br', detail: 'Please fill required fields to continue' });
          return;
        }
        const date = this.cs.jsonDate(this.form.controls.estimatedDepartureTimeFE.value)
        this.form.controls.estimatedDepartureTime.patchValue(date)
        if (this.pageToken.pageflow != 'New') {
          this.spin.show()
          this.service.UpdatePreAlertManifest([this.form.getRawValue()]).subscribe({
            next: (res: any) => {
              this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res[0].consignmentId + ' has been updated successfully' });
              this.router.navigate(['/main/airport/preAlertManifest']);
              this.spin.hide();
            }, error: (err) => {
              this.spin.hide();
              this.cs.commonerrorNew(err);
            }
          })
        }

      }
    });
  }
}
