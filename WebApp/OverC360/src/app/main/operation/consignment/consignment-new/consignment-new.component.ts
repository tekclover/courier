import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { MatDialog } from '@angular/material/dialog';
import { PieceDetailsComponent } from './piece-details/piece-details.component';

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
  disabledDelivery = true;
  disabledBilling = true;
  disabledConsignment = true;
  disabledPiece = true;
  disabledDelivered = true;
  disabledReturn = true;


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
    private el: ElementRef,
    public dialog: MatDialog,
  ) {
    this.status = [
      { value: '17', label: 'Inactive' },
      { value: '16', label: 'Active' }
    ];
  }

  pageToken: any;
  // form builder initialize

  shipmentInfo = this.fb.group({
    companyId: [this.auth.companyId,],
    priority: [],
    partnerType: [],
    partnerId: [, Validators.required],
    partnerName: [,],
    statusId: [,],
    paymentType: [,],
    productId: [],
    productName: [],
    subProductId: [],
    subProductName: [],
    serviceTypeId: [, Validators.required],
    serviceTypeText: [],
    manufacturer: [],
    masterAirwayBill: [],
    houseAirwayBill: [],
    noOfPieceHawb: [],
    noOfPackageMawb: [],
    countryOfOrigin: [],
    consignmentType: [,],
    customerCode: [],
    customerReferenceNumber: [],
    actionType: [],
    movementType: [],
    forwardReferenceNumber: [],
    workerCode: [],
    loadType: [, Validators.required],
    courierAccount: [],
    courierPartner: [],
    courierPartnerReferenceNumber: [],
  });

  carrierInfo = this.fb.group({

  })


  OriginDetails = this.fb.group({
    accountId: [],
    addressHubCode: [,],
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


  DestinationDetails = this.fb.group({
    accountId: [,],
    addressHubCode: [],
    addressLine1: [],
    addressLine2: [],
    alternatePhone: [],
    city: [,],
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


  senderInfo = this.fb.group({
    shipperId: [],
    shipperName: [],
    originDetails: this.OriginDetails
  })

  deliveryInfo = this.fb.group({
    consigneeName: [,],
    consigneeCivilId: [],
    destinationDetails: this.DestinationDetails
  })

  billing = this.fb.group({
    incoTerms: [],
    paymentType: [],
    currency: [],
    freightCurrency: [],
    freightCharges: [],
    countryOfSupply: [],
    declaredValue: [],
    consignmentCurrency: [],
    consignmentValue: [],
    actualCurrency: [],
    totalDuty: [],
    specialApprovalValue: [],
    codAmount: [],
    codFavorOf: [],
    codCollectionMode: [],
    declaredValueWithoutTax: [],
    invoiceAmount: [],
    invoiceUrl: [],
    productCode: [],
    customsValue: [],
    amount: [],
    isCustomsDeclarable: [],
  })

  consignment = this.fb.group({
    length: [],
    width: [],
    height: [],
    dimensionUnit: [],
    volume: [],
    volumeUnit: [],
    weight: [],
    weightUnit: [],
    invoiceNumber: [],
    invoiceDate: [],
    invoiceSupplierName: [],
    goodsDescription: [],
    notifyParty: [],
    consignmentCurrency: [],
    consignmentValue: [],
    partnerHouseAirwayBill: [],
    partnerMasterAirwayBill: [],
    airportOriginCode: [],
    flightArrivalTime: [],
    noOfPackages: [],
    flightName: [],
    flightNo: [],
    packageType: [],
    netWeight: [],
    grossWeight: [],
  })

  piece = this.fb.group({
    pieceDetails: this.fb.array([
      this.initPieceDetail()
    ]) 
  });

  initPieceDetail() {
    return this.fb.group({
      codAmount: [''],
      declaredValue: [''],
      description: [''],
      dimensionUnit: [''],
      height: [''],
      itemDetails: this.fb.array([
        this.initItemDetail()
      ]),
      length: [''],
      packReferenceNumber: [''],
      partnerType: [''],
      pieceId: [''],
      referenceField1: [''],
      referenceField10: [''],
      referenceField11: [''],
      referenceField12: [''],
      referenceField13: [''],
      referenceField14: [''],
      referenceField15: [''],
      referenceField16: [''],
      referenceField17: [''],
      referenceField18: [''],
      referenceField19: [''],
      referenceField2: [''],
      referenceField20: [''],
      referenceField3: [''],
      referenceField4: [''],
      referenceField5: [''],
      referenceField6: [''],
      referenceField7: [''],
      referenceField8: [''],
      referenceField9: [''],
      referenceImageList: this.fb.array([
        this.fb.group({
          imageRefId: [''],
          pdfUrl: [''],
          referenceImageUrl: ['']
        })
      ]),
      volume: [''],
      volumeUnit: [''],
      weight: [''],
      weightUnit: [''],
      width: ['']
    });
  }

  initItemDetail() {
    return this.fb.group({
      codAmount: [''],
      declaredValue: [''],
      description: [''],
      dimensionUnit: [''],
      height: [''],
      hsCode: [''],
      imageRefId: [''],
      itemCode: [''],
      length: [''],
      partnerName: [''],
      partnerType: [''],
      pieceItemId: [''],
      referenceField1: [''],
      referenceField10: [''],
      referenceField11: [''],
      referenceField12: [''],
      referenceField13: [''],
      referenceField14: [''],
      referenceField15: [''],
      referenceField16: [''],
      referenceField17: [''],
      referenceField18: [''],
      referenceField19: [''],
      referenceField2: [''],
      referenceField20: [''],
      referenceField3: [''],
      referenceField4: [''],
      referenceField5: [''],
      referenceField6: [''],
      referenceField7: [''],
      referenceField8: [''],
      referenceField9: [''],
      referenceImageList: this.fb.array([
        this.fb.group({
          imageRefId: [''],
          pdfUrl: [''],
          referenceImageUrl: ['']
        })
      ]),
      volume: [''],
      volumeUnit: [''],
      weight: [''],
      weightUnit: [''],
      width: ['']
    });
  }

  form = this.fb.group({
    updatedBy: [,],
    updatedOn: ['',],
    createdOn: ['',],
    createdBy: [,],
    originDetails: [],
  });


  get pieceDetails(): FormArray {
    return this.piece.get('pieceDetails') as FormArray;
  }
  addItem() {
    this.pieceDetails.push(this.createItemFormGroup());
  }
  createItemFormGroup(): FormGroup {
    return this.fb.group({
      id: [this.pieceDetails.value.length,],
      tags: [],
      volume: [],
      pieceValue: [],
      pieceCurrency: [],
      volumeUnit: [],
      weight: [],
      weight_unit: [],
      width: [],
      codAmount: [],
      declaredValue: [],
      hsCode: [],
      description: [],
      dimensionUnit: [],
      height: [],
      length: [],
      packReferenceNumber: [],
      partnerType: [],
      pieceId: [],
      itemDetails: [],
    });
  }
  removeItem(index: number) {
    this.pieceDetails.removeAt(index);
  }
  submitted = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorHandlingShipment(control: string, error: string = 'required') {
    const controlInstance = this.shipmentInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingCarrier(control: string, error: string = 'required') {
    const controlInstance = this.carrierInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingSender(control: string, error: string = 'required') {
    const controlInstance = this.senderInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingDelivery(control: string, error: string = 'required') {
    const controlInstance = this.deliveryInfo.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingBilling(control: string, error: string = 'required') {
    const controlInstance = this.billing.get(control);
    return controlInstance && controlInstance.hasError(error) && this.submitted;
  }
  errorHandlingConsignment(control: string, error: string = 'required') {
    const controlInstance = this.consignment.get(control);
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

    const dataToSend = ['Operation', 'Consignment', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.shipmentInfo.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }

  companyIdList: any[] = [];
  districtList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.district.url
    ]).subscribe({
      next: (results: any) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.districtList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.district.key);
        this.spin.hide();
        console.log(2)
      },
      error: (err: any) => {
        console.log(2)
        this.spin.hide();
        this.cs.commonerrorNew(err);
      },
    });

  }

  fill(line: any) {
    this.form.patchValue(line);
    this.form.controls.updatedOn.patchValue(this.cs.dateExcel(this.form.controls.updatedOn.value));
    this.form.controls.createdOn.patchValue(this.cs.dateExcel(this.form.controls.createdOn.value));

    this.disabledConsignment = false;
    this.disabledPiece = false;
    this.disabledSender = false;
    this.disabledDelivery = false;
    this.disabledBilling = false;

    this.shipmentInfo.patchValue(line),
    this.consignment.patchValue(line),
    this.senderInfo.patchValue(line),
    this.deliveryInfo.patchValue(line),
    this.billing.patchValue(line),


      line.pieceDetails.forEach((res: any) => {
        this.pieceDetails.push(this.fb.group(res));
      });
  }

  opendialog(type: any = 'New', data: any) {
    console.log(data)
    const dialogRef = this.dialog.open(PieceDetailsComponent, {
      disableClose: true,
      width: '90%',
      maxWidth: '95%',
      position: { top: '6.5%', left: '10%' },
      data: { pageflow: type, line: this.pageToken.pageflow != 'New' ? this.pageToken.line.pieceDetails : data },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        data.controls.itemDetails.patchValue(result);
      }
    });
  }

  selectedFiles: any[] = [];
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
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

  calculateVolume(formName: any) {
    const volume = formName.controls.length.value as number * formName.controls.width.value as number * formName.controls.height.value as number;
    formName.controls.volume.patchValue(volume);
  }

  saveShipment() {
    this.submitted = true;
    if (this.shipmentInfo.invalid) {
      for (const control in this.shipmentInfo.controls) {
        const controlInstance = this.shipmentInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }

    if (this.shipmentInfo.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    } else {
      this.activeIndex = 1;
      this.disabledConsignment = false;
      this.submitted = false;
    }
  }

  saveConsignment() {
    this.submitted = true;
    if (this.consignment.invalid) {
      for (const control in this.consignment.controls) {
        const controlInstance = this.consignment.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }

    if (this.consignment.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    } else {
      this.activeIndex = 2;
      this.submitted = false;
      this.disabledPiece = false;
    }
  }
  savePiece() {
    this.activeIndex = 3;
    this.submitted = false;
    this.disabledSender = false;
  }
  saveSender() {
    this.submitted = true;
    if (this.senderInfo.invalid) {
      for (const control in this.senderInfo.controls) {
        const controlInstance = this.senderInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }

    if (this.senderInfo.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    } else {
      this.activeIndex = 4;
      this.disabledDelivery = false;
      this.submitted = false;
    }
  }
  saveDelivery() {
    this.submitted = true;
    if (this.deliveryInfo.invalid) {
      for (const control in this.deliveryInfo.controls) {
        const controlInstance = this.deliveryInfo.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }

    if (this.deliveryInfo.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    } else {
      if (this.pageToken.pageflow != 'New') {
        this.activeIndex = 5;
        this.submitted = false;
        this.disabledBilling = false;
      } else {
        this.saveFinal();
      }


    }
  }
  saveBilling() {
    this.submitted = true;
    if (this.billing.invalid) {
      for (const control in this.billing.controls) {
        const controlInstance = this.billing.get(control);
        if (controlInstance?.invalid) {
          const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
          if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    }
    if (this.billing.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        key: 'br',
        detail: 'Please fill required fields to continue',
      });
      return;
    } else {
      this.saveFinal();
    }
  }

  mainForm: FormGroup = new FormGroup({

  });

  saveFinal() {
    this.mainForm = this.fb.group({
      ...this.shipmentInfo.value,
      ...this.consignment.value,
      ...this.senderInfo.value,
      ...this.deliveryInfo.value,
      ...this.billing.value,
      pieceDetails: this.pieceDetails,
      updatedBy: [,],
      updatedOn: ['',],
      createdOn: ['',],
      createdBy: [,],
      companyId: [this.auth.companyId,]
    });

    if (this.pageToken.pageflow != 'New') {
      this.service.Update([this.mainForm.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res[0].consignmentId + ' has been updated successfully',
          });
          this.router.navigate(['/main/operation/consignment']);
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } else {
      this.service.Create([this.mainForm.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: res[0].consignmentId + ' has been created successfully',
          });
          this.router.navigate(['/main/operation/consignment']);
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }
  }
}












// saveCarrier() {
//   this.submitted = true;
//   if (this.carrierInfo.invalid) {
//     for (const control in this.carrierInfo.controls) {
//       const controlInstance = this.carrierInfo.get(control);
//       if (controlInstance?.invalid) {
//         const invalidControl = this.el.nativeElement.querySelector(`#${control}`);
//         if (invalidControl) {
//           invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
//           break;
//         }
//       }
//     }
//   }

//   if (this.carrierInfo.invalid) {
//     this.messageService.add({
//       severity: 'error',
//       summary: 'Error',
//       key: 'br',
//       detail: 'Please fill required fields to continue',
//     });
//     return;
//   } else {
//     this.activeIndex = 6;
//     this.disabledBilling = false;
//     this.submitted = false;
//   }
// }