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
  paymentType: any[] = [];
  incoTerms: any[] = [];

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
      this.cas.dropdownlist.setup.province.url





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
    console.log(this.piece)

  }

  opendialog(type: any = 'New', data: any, index: any) {
    const dialogRef = this.dialog.open(PieceDetailsComponent, {
      disableClose: true,
      width: '90%',
      maxWidth: '95%',
      position: { top: '6.5%', left: '10%' },
      data: { pageflow: type, line: (this.piece.controls.pieceDetails as FormArray).at(index).get('itemDetails') as FormArray },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const itemDetailsFormArray = (this.piece.controls.pieceDetails as FormArray).at(index).get('itemDetails') as FormArray;
        itemDetailsFormArray.clear();
        result.forEach((item: any) => {
          itemDetailsFormArray.push(this.fb.group({
            description: item.description
          }));
        });

        console.log('Updated itemDetails:', itemDetailsFormArray.value);
        console.log(this.piece)
      }
    });
  }


  selectedFiles: FileList | null = null;
  selectFiles(event: any, data: any): void {
    this.selectedFiles = event.target.files;

    // Assuming you have an event object, such as from an input file change event
    const files: FileList = event.target.files!; // Explicitly type files as FileList

    // Convert FileList to an array of File objects
    const filesArray: File[] = Array.from(files);

    // Array to hold objects with name and referenceImageUrl
    let filesWithData: { name: string, referenceImageUrl: string }[] = [];

    // Iterate over each file using forEach
    filesArray.forEach((file: File) => {
      // Perform actions with each file here
      console.log(file.name); // Example action: logging the file name

      // Set reference image URL for each file
      const referenceImageUrl = `path/to/images/${file.name}`;

      // Create an object with file name and reference image URL
      const fileData = {
        name: file.name,
        referenceImageUrl: file.name,
      };

      // Push the object into the array
      filesWithData.push(fileData);
    });

    // Now filesWithData array contains objects with both name and referenceImageUrl
    console.log(filesWithData);



    this.uploadFile(filesWithData);
  }

  uploadFile(data: any) {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log('No files selected for upload.');
      return;
    }
    console.log(data)
    this.patchReferenceImages(data),
      console.log(this.piece)

    const location = 'test'
    this.service.uploadFiles(this.selectedFiles, location).subscribe({
      next: (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          key: 'br',
          detail: 'File uploaded successfully',
        });
      }, error: (err) => {
        this.spin.hide();
        this.cs.commonerrorNew(err);
      }
    });

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
      languageId: [this.auth.languageId,]
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