import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';

@Component({
  selector: 'app-consignment-new',
  templateUrl: './consignment-new.component.html',
  styleUrl: './consignment-new.component.scss'
})
export class ConsignmentNewComponent {


  activeIndex: number = 0;
  status: any[] = [];
  
  disabledCarrier = true;
  disabledSender = true;
  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    private el: ElementRef
  ) {
    this.status = [
      { value: '2', label: 'Inactive' },
      { value: '1', label: 'Active' }
    ];
  }

  pageToken: any;
  // form builder initialize

  shipmentInfo = this.fb.group({

  });
  OriginDetails = this.fb.group({
  accountId: [],
  addressHubCode: [, Validators.required],
  addressLine1: [],
  addressLine2: [],
  alternatePhone: [],
  city: [],
  companyName: [],
  country: [],
  district: [],
  email: [],
  latitude: [],
  longitude: [],
  name: [],
  phone: [],
  pinCode: [],
  state: [],
  });

  form = this.fb.group({
    languageId: [this.auth.languageId, Validators.required],
    updatedBy: [,],
    updatedOn: ['',],
    createdOn: ['',],
    createdBy: [,],
    companyId: [this.auth.companyId, Validators.required],    
    partnerId: [, Validators.required],
    statusId: [,  Validators.required],
    masterAirwayBill: [, Validators.required],
    houseAirwayBill: [, Validators.required],
    actionType: [],
    actualCurrency: [],
    airportOriginCode: [],
    allocationTime: [],
    amount: [],
    autoAllocate: [],
    codAmount: [],
    codCollectionMode: [],
    codFavorOf: [],
    consigneeCivilId: [],
    consigneeName: [],
    consignmentCurrency: [],
    consignmentId: [],
    consignmentValue: [],
    constraintTags: [],
    countryOfOrigin: [],
    countryOfSupply: [],
    courierAccount: [],
    courierPartner: [],
    courierPartnerReferenceNumber: [],
    currency: [],
    customerCode: [],
    customerReferenceNumber: [],
    customsValue: [],
    declaredValue: [],
    declaredValueWithoutTax: [],
    deliveryOtp: [],
    deliveryServiceTime: [],
    deliveryTimeSlotEnd: [],
    deliveryTimeSlotStart: [],
    description: [],
  dimensionUnit: [],
    ewayBill: [],
    exemptionBeneficiary: [],
    exemptionFor: [],
    exemptionReference: [],
    flightArrivalTime: [],
    flightDetails: [],
    flightName: [],
    flightNo: [],
    forwardReferenceNumber: [],
    freightCharges: [],
    freightCurrency: [],
    goodsDescription: [],
    grossWeight: [],
    height: [],
    hsCode: [],
    hubCode: [],
    incoTerms: [],
    invoiceAmount: [],
    invoiceDate: [],
    invoiceNumber: [],
    invoiceSupplierName: [],
    invoiceType: [],
    invoiceUrl: [],
    isCustomsDeclarable: [],
    isExchange: [],
    isExempted: [],
    itemTotalPrice: [],
    languageDescription: [],
    length: [],
    lineNo: [],
    loadType: [],
    manufacturer: [],
    movementType: [],
    netWeight: [],
    noOfPackageHawb: [],
    noOfPackageMawb: [],
    noOfPackages: [],
    noOfPieceHawb: [],
    notes: [],
    notifyParty: [],
    packDetails: [],
    packageType: [],
    partnerHouseAirwayBill: [],
    partnerMasterAirwayBill: [],
    partnerName: [, ],
    partnerType: [],
    pickupOtp: [],
    pickupServiceTime: [],
    pickupTimeSlotEnd: [],
    pickupTimeSlotStart: [],
    priority: [],
    productCode: [],
    productId: [],
    productName: [],
    quantity: [],
    referenceField1: [],
    referenceField10: [],
    referenceField11: [],
    referenceField12: [],
    referenceField13: [],
    referenceField14: [],
    referenceField15: [],
    referenceField16: [],
    referenceField17: [],
    referenceField18: [],
    referenceField19: [],
    referenceField2: [],
    referenceField20: [],
    referenceField21: [],
    referenceField22: [],
    referenceField23: [],
    referenceField24: [],
    referenceField25: [],
    referenceField26: [],
    referenceField27: [],
    referenceField28: [],
    referenceField29: [],
    referenceField3: [],
    referenceField30: [],
    referenceField31: [],
    referenceField32: [],
    referenceField33: [],
    referenceField34: [],
    referenceField35: [],
    referenceField36: [],
    referenceField37: [],
    referenceField38: [],
    referenceField39: [],
    referenceField4: [],
    referenceField40: [],
    referenceField41: [],
    referenceField42: [],
    referenceField43: [],
    referenceField44: [],
    referenceField45: [],
    referenceField46: [],
    referenceField47: [],
    referenceField48: [],
    referenceField49: [],
    referenceField5: [],
    referenceField50: [],
    referenceField6: [],
    referenceField7: [],
    referenceField8: [],
    referenceField9: [],
  referenceNumber: [],
    remark: [],
  reverseReason: [],
    rtoOtp: [],
    scheduledAt: [],
    serviceTime: [],
    serviceTypeId: [],
    serviceTypeText: [],
    shipperId: [],
    shipperName: [],
    specialApprovalValue: [],
    statusDescription: [],
    storageLocation: [],
    subProductId: [],
    subProductName: [],
    tags: [],
    totalDuty: [],
    upstreamCreationSource: [],
    upstreamCreationTime: [],
    volume: [],
    volumeUnit: [],
    weight: [],
    weightUnit: [],
    width: [],
    workerCode: [],
    workerEligiblePayout: [],
    workerTipAmount: [],
    originDetails: this.OriginDetails,
  });




  submitted = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorHandling(control: string, error: string = 'required') {
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
    console.log(this.mainForm.getRawValue())
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Operation', 'Consignment', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();

      this.disabledCarrier = true;
      this.disabledSender = true;
    }
  }

  languageIdList: any[] = [];
  companyIdList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
    ]).subscribe({
      next: (results: any) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.spin.hide();
      },
      error: (err: any) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });

  }

  fill(line: any) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));
  }

  save() {
    this.submitted = true;

    if (this.form.invalid) {
      for (const control in this.form.controls) {
        const controlInstance = this.form.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          console.log(invalidControl)
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }

    if (this.form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    }

    if (this.pageToken.pageflow != 'New') {
      this.spin.show();
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res.partnerId + ' has been updated successfully',
          });
          this.router.navigate(['/main/master/rate']);
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    } else {
      this.spin.show();
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
          if (res) {
            this.messageService.add({
              severity: 'success',
              summary: 'Created',
              key: 'br',
              detail: res.partnerId + ' has been created successfully',
            });
            this.router.navigate(['/main/master/rate']);
            this.spin.hide();
          }
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }
  }

  saveShipment() {
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
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
      }else{
        this.activeIndex = 1;
        this.disabledCarrier = false;
    }
  }

  saveCarrier(){
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
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
      }else{
        this.activeIndex = 2;
    }
  }

  saveSender(){
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
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
      }else{
        this.activeIndex = 2;
    }
  }
}
