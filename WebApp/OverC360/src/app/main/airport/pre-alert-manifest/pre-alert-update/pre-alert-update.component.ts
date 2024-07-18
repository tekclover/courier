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
    incoTerms: [],
    shipperName: [],
    description: [],
    weight: [,],
    consignmentValue: [],
    consignmentValueLocal: [],
    masterAirwayBill: [],
    houseAirwayBill: [],
    consignmentCurrency: [],
    airportDestinationCode: [],
    hsCode: [],
    iata: [],
    flightNo: [],
    flightName: [],
    bayanHv: [],
    partnerType: ['',],
    countryOfOrigin: [],
    countryOfDestination: [],
    flightArrivalTime: [],
    estimatedDepartureTime: ['',],
    estimatedDepartureTimeFE: [new Date,],
    noOfPackageMawb: [],
    noOfCrt: [],
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
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }

  companyIdList: any[] = [];
  languageIdList: any[] = [];
  iataIdList: any[] = [];
  countryIdList: any[] = [];
  customerIdList: any[] = [];
  hsCodeList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.iata.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.hsCode.url,
      this.cas.dropdownlist.setup.consignor.url,
      this.cas.dropdownlist.setup.customer.url,


    ]).subscribe({
      next: (results: any) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.languageIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.language.key);
        this.countryIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.country.key);
        this.hsCodeList = this.cas.forLanguageFilterWithoutKey(results[3], this.cas.dropdownlist.setup.hsCode.key);
        this.iataIdList = this.cas.forLanguageFilterWithoutKey(results[4], this.cas.dropdownlist.setup.iata.key);
        const consitnor = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.consignor.key);
        const customer = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.customer.key);
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
  fill(line: any) {
    this.service.search({ houseAirwayBill: [line.houseAirwayBill] }).subscribe({
      next: res => {
        if (res) {
          this.form.patchValue(res[0]);
          this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
          this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
          if (this.form.controls.estimatedDepartureTime.value) {
            this.form.controls.estimatedDepartureTimeFE.patchValue(this.cs.pCalendar(this.form.controls.estimatedDepartureTime.value));
          }
        }
      }, error: err => {
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
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res[0].consignmentId + ' has been updated successfully' });
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
}
