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
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DimensionComponent } from './dimension/dimension.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@Component({
  selector: 'app-consignment-new',
  templateUrl: './consignment-new.component.html',
  styleUrl: './consignment-new.component.scss'
})
export class ConsignmentNewComponent {


  activeIndex: number = 0;
  status: any[] = [];
  paymentType: any[] = [];
  incoTerms: any[] = [];
  codCollectionMode: any[] = [];
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
    this.paymentType = [
      { value: 'prepaid', label: 'Prepaid' },
      { value: 'cod', label: 'COD' }
    ];
    this.incoTerms = [
      { value: 'ddu', label: 'DDU' },
      { value: 'ddp', label: 'DDP' }
    ];
    this.codCollectionMode = [
      { value: 'cash', label: 'Cash' },
      { value: 'cheque', label: 'Cheque' },
      { value: 'online', label: 'Online' },
      { value: 'card', label: 'Card' }
    ];
  }

  pageToken: any;
  // form builder initialize

  shipmentInfo = this.fb.group({
    companyId: [this.auth.companyId,],
    priority: [],
    incoTerms: [],
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
    countryOfDestination: [],
    consignmentType: [,],
    customerCode: [],
    codAmount: [],
    codCollectionMode: [],
    codFavorOf: [],
    customerReferenceNumber: [],
    actionType: [],
    movementType: [],
    forwardReferenceNumber: [],
    workerCode: [],
    loadType: [, Validators.required],
    courierAccount: [],
    courierPartner: [],
    courierPartnerReferenceNumber: [],
    invoiceAmount: [],
    invoiceUrl: [],
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
    invoiceDate: [new Date,],
    invoiceDateFE: [new Date,],
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
    ])
  });

  initPieceDetail() {
    return this.fb.group({
      codAmount: [''],
      declaredValue: [''],
      description: [''],
      dimensionUnit: [''],
      height: [''],
      itemDetails: this.fb.array([]),
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
      referenceImageList: this.fb.array([]),
      volume: [''],
      volumeUnit: [''],
      weight: [''],
      weightUnit: [''],
      width: [''],
      hsCode: [''],
      pieceValue: [''],
      pieceCurrency: [''],
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
      referenceImageList: this.fb.array([]),
      volume: [''],
      volumeUnit: [''],
      weight: [''],
      weightUnit: [''],
      width: ['']
    });
  }

  addPieceDetail() {
    const control = this.piece.controls.pieceDetails as FormArray;
    control.push(this.initPieceDetail());
  }

  removePieceDetail(index: number) {
    console.log(index)
    const control = this.piece.controls.pieceDetails as FormArray;
    control.removeAt(index);
  }

  addItemDetail(pieceIndex: number) {
    const control = (this.piece.controls.pieceDetails as FormArray).at(pieceIndex).get('itemDetails') as FormArray;
    control.push(this.initItemDetail());
  }

  removeItemDetail(pieceIndex: number, itemIndex: number) {
    const control = (this.piece.controls.pieceDetails as FormArray).at(pieceIndex).get('itemDetails') as FormArray;
    control.removeAt(itemIndex);
  }


  patchForm(shipmentData: any) {
    const piecesArray = this.piece.get('pieceDetails') as FormArray;
    shipmentData.pieceDetails.forEach((piece: any) => {
      piecesArray.push(this.patchPieceDetail(piece));
    });
  }

  patchPieceDetail(piece: any) {
    return this.fb.group({
      codAmount: [piece.codAmount],
      declaredValue: [piece.declaredValue],
      description: [piece.description],
      dimensionUnit: [piece.dimensionUnit],
      height: [piece.height],
      itemDetails: this.patchItemDetails(piece.itemDetails),
      length: [piece.length],
      packReferenceNumber: [piece.packReferenceNumber],
      partnerType: [piece.partnerType],
      pieceId: [piece.pieceId],
      referenceField1: [piece.referenceField1],
      referenceField10: [piece.referenceField10],
      referenceField11: [piece.referenceField11],
      referenceField12: [piece.referenceField12],
      referenceField13: [piece.referenceField13],
      referenceField14: [piece.referenceField14],
      referenceField15: [piece.referenceField15],
      referenceField16: [piece.referenceField16],
      referenceField17: [piece.referenceField17],
      referenceField18: [piece.referenceField18],
      referenceField19: [piece.referenceField19],
      referenceField2: [piece.referenceField2],
      referenceField20: [piece.referenceField20],
      referenceField3: [piece.referenceField3],
      referenceField4: [piece.referenceField4],
      referenceField5: [piece.referenceField5],
      referenceField6: [piece.referenceField6],
      referenceField7: [piece.referenceField7],
      referenceField8: [piece.referenceField8],
      referenceField9: [piece.referenceField9],
      referenceImageList: this.patchReferenceImages(piece.referenceImageList),
      volume: [piece.volume],
      volumeUnit: [piece.volumeUnit],
      weight: [piece.weight],
      weightUnit: [piece.weightUnit],
      width: [piece.width],
      hsCode: [piece.hsCode],
      pieceValue: [piece.pieceValue],
      pieceCurrency: [piece.pieceCurrency],
    });
  }

  patchItemDetails(itemDetails: any[]) {
    return this.fb.array(itemDetails.map(item => this.patchItemDetail(item)));
  }

  patchItemDetail(item: any) {
    return this.fb.group({
      codAmount: [item.codAmount],
      declaredValue: [item.declaredValue],
      description: [item.description],
      dimensionUnit: [item.dimensionUnit],
      height: [item.height],
      hsCode: [item.hsCode],
      imageRefId: [item.imageRefId],
      itemCode: [item.itemCode],
      length: [item.length],
      partnerName: [item.partnerName],
      partnerType: [item.partnerType],
      pieceItemId: [item.pieceItemId],
      referenceField1: [item.referenceField1],
      referenceField10: [item.referenceField10],
      referenceField11: [item.referenceField11],
      referenceField12: [item.referenceField12],
      referenceField13: [item.referenceField13],
      referenceField14: [item.referenceField14],
      referenceField15: [item.referenceField15],
      referenceField16: [item.referenceField16],
      referenceField17: [item.referenceField17],
      referenceField18: [item.referenceField18],
      referenceField19: [item.referenceField19],
      referenceField2: [item.referenceField2],
      referenceField20: [item.referenceField20],
      referenceField3: [item.referenceField3],
      referenceField4: [item.referenceField4],
      referenceField5: [item.referenceField5],
      referenceField6: [item.referenceField6],
      referenceField7: [item.referenceField7],
      referenceField8: [item.referenceField8],
      referenceField9: [item.referenceField9],
      referenceImageList: this.patchReferenceImages(item.referenceImageList),
      volume: [item.volume],
      volumeUnit: [item.volumeUnit],
      weight: [item.weight],
      weightUnit: [item.weightUnit],
      width: [item.width]
    });
  }

  patchReferenceImages(referenceImageList: any[]) {
    if (referenceImageList == null) {
      return
    }
    return this.fb.array(referenceImageList.map(image => this.fb.group({
      imageRefId: [image.imageRefId],
      pdfUrl: [image.pdfUrl],
      referenceImageUrl: [image.referenceImageUrl]
    })));
  }


  form = this.fb.group({
    updatedBy: [,],
    updatedOn: ['',],
    createdOn: ['',],
    createdBy: [,],
    originDetails: [],
  });



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

    const dataToSend = ['Operations', 'Consignment', this.pageToken.pageflow];
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
  districtIdList: any[] = [];
  productIdList: any[] = [];
  subProductIdList: any[] = [];
  serviceTypeIdList: any[] = [];
  consignmentTypeIdList: any[] = [];
  loadTypeIdList: any[] = [];
  countryIdList: any[] = [];
  cityIdList: any[] = [];
  provinceIdList: any[] = [];
  partnerName: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.district.url,
      this.cas.dropdownlist.setup.product.url,
      this.cas.dropdownlist.setup.subProduct.url,
      this.cas.dropdownlist.setup.serviceType.url,
      this.cas.dropdownlist.setup.consignmentType.url,
      this.cas.dropdownlist.setup.loadType.url,
      this.cas.dropdownlist.setup.country.url,
      this.cas.dropdownlist.setup.city.url,
      this.cas.dropdownlist.setup.province.url,
      this.cas.dropdownlist.setup.consignor.url





    ]).subscribe({
      next: (results: any) => {
        this.companyIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.company.key);
        this.districtIdList = this.cas.forLanguageFilter(results[1], this.cas.dropdownlist.setup.district.key);
        this.productIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.product.key);
        this.subProductIdList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.subProduct.key);
        this.serviceTypeIdList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.serviceType.key);
        this.consignmentTypeIdList = this.cas.forLanguageFilter(results[5], this.cas.dropdownlist.setup.consignmentType.key);
        this.loadTypeIdList = this.cas.forLanguageFilter(results[6], this.cas.dropdownlist.setup.loadType.key);
        this.countryIdList = this.cas.forLanguageFilter(results[7], this.cas.dropdownlist.setup.country.key);
        this.cityIdList = this.cas.forLanguageFilter(results[8], this.cas.dropdownlist.setup.city.key);
        this.provinceIdList = this.cas.forLanguageFilter(results[9], this.cas.dropdownlist.setup.province.key);
        this.partnerName = this.cas.forLanguageFilter(results[10], this.cas.dropdownlist.setup.consignor.key);





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

    this.disabledConsignment = false;
    this.disabledPiece = false;
    this.disabledSender = false;
    this.disabledDelivery = false;
    this.disabledBilling = false;

    this.shipmentInfo.patchValue(line),
      this.consignment.patchValue(line),
      this.senderInfo.patchValue(line),
      this.deliveryInfo.patchValue(line),
      this.billing.patchValue(line)

    this.patchForm(line);
console.log(this.consignment.controls.invoiceDate.value)
    if(this.consignment.controls.invoiceDate.value){
      this.consignment.controls.invoiceDateFE.patchValue(this.cs.pCalendar(this.consignment.controls.invoiceDate.value));
    }
 
    this.shipmentInfo.controls.masterAirwayBill.disable();
    this.shipmentInfo.controls.houseAirwayBill.disable();
  }

  opendialog(type: any = 'New', index: any) {
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      disableClose: true,
      width: '90%',
      maxWidth: '95%',
      position: { top: '6.5%', left: '10%' },
      data: { pageflow: type, line: (this.piece.controls.pieceDetails as FormArray).at(index).get('itemDetails') as FormArray },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        const itemDetailsFormArray = (this.piece.controls.pieceDetails as FormArray).at(index).get('itemDetails') as FormArray;
        itemDetailsFormArray.clear();
        result.forEach((item: any) => {
          itemDetailsFormArray.push(this.fb.group({
            codAmount: item.codAmount,
            declaredValue: item.declaredValue,
            description: item.description,
            dimensionUnit: item.dimensionUnit,
            height: item.height,
            hsCode: item.hsCode,
            imageRefId: item.imageRefId,
            itemCode: item.itemCode,
            length: item.length,
            partnerName: item.partnerName,
            partnerType: item.partnerType,
            pieceItemId: item.pieceItemId,
            volume: item.volume,
            volumeUnit: item.volumeUnit,
            weight: item.weight,
            weightUnit: item.weightUnit,
            width: item.width,
            referenceImageList: this.patchReferenceImages(item.referenceImageList),
          }));
        });
        console.log(this.piece)
      }
    });
  }

  dimension(type: any = 'New', module: any, index: any) {
    const dialogRef = this.dialog.open(DimensionComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '25%' },
      data: { pageflow: type, module: module, line: (this.piece.controls.pieceDetails as FormArray).at(index) },
    });

    dialogRef.afterClosed().subscribe(result => {
      const control = (this.piece.controls.pieceDetails as FormArray).at(index)
    })
  }

  imageupload(type: any = 'New', index: any) {
    const dialogRef = this.dialog.open(ImageUploadComponent, {
      disableClose: true,
      width: '70%',
      maxWidth: '82%',
      position: { top: '6.5%', left: '25%' },
      data: { pageflow: type, line: (this.piece.controls.pieceDetails as FormArray).at(index).get('referenceImageList') as FormArray },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const imageDetailsFormArray = (this.piece.controls.pieceDetails as FormArray).at(index).get('referenceImageList') as FormArray;
        imageDetailsFormArray.clear();
        result.forEach((image: any) => {
          imageDetailsFormArray.push(this.fb.group({
            imageRefId: image.imageRefId,
            pdfUrl: image.pdfUrl,
            referenceImageUrl: image.referenceImageUrl,
          }));
        });
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
      pieceDetails: this.piece.controls.pieceDetails as FormArray,
      updatedBy: [,],
      updatedOn: ['',],
      createdOn: ['',],
      createdBy: [,],
      companyId: [this.auth.companyId,],
      languageId: [this.auth.languageId,],
      invoiceDate: this.cs.jsonDate(this.consignment.controls.invoiceDateFE.value)
    });

    if (this.pageToken.pageflow != 'New') {
      this.service.Update([this.mainForm.getRawValue()]).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            key: 'br',
            detail: 'Consignment has been updated successfully',
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
            detail: 'Consignment has been created successfully',
          });
          this.router.navigate(['/main/operation/consignment']);
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }
  }


  showPaymentTypeFields = false;
  paymentChange() {
    const paymentTypeValue = this.shipmentInfo.controls.paymentType.value;
    if (typeof paymentTypeValue === 'string' && paymentTypeValue === 'cod') {
      this.showPaymentTypeFields = true;
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