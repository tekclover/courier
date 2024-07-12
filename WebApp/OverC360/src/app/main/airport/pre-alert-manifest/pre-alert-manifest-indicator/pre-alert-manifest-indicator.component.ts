import { Component, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { PathNameService } from '../../../../common-service/path-name.service';
import { Header, MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { AuthService } from '../../../../core/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { ConsignmentService } from '../../../operation/consignment/consignment.service';
import { ConsignorService } from '../../../master/consignor/consignor.service';
import { CustomerService } from '../../../master/customer/customer.service';


@Component({
  selector: 'app-pre-alert-manifest-indicator',
  templateUrl: './pre-alert-manifest-indicator.component.html',
  styleUrl: './pre-alert-manifest-indicator.component.scss'
})
export class PreAlertManifestIndicatorComponent {

  constructor(
    public dialogRef: MatDialogRef<PreAlertManifestIndicatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private consignmentService: ConsignmentService,
    private customerService: CustomerService,
    private consignorService: ConsignorService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    private el: ElementRef,
    public dialog: MatDialog,
  ) { }

  cols: any[] = [];

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

 // pageToken: any;

  ngOnInit(): void {
    // let code = this.route.snapshot.params['code'];
    // this.pageToken = this.cs.decrypt(code);

    // const dataToSend = ['Mid-Mile', 'Pre Alert Manifest', this.pageToken.pageflow];
    // this.path.setData(dataToSend);

  //  this.callTableHeader();
    this.preAlertValidation();

  }

  callTableHeader() {
    this.cols = [
      { field: 'declaredValue', header: 'Declared Value' },
      { field: 'consignmentId', header: 'Consignment Id' },
      { field: 'noOfPieceHawb', header: 'No of Piece HAWB' },
      { field: 'partnerHouseAirwayBill', header: 'Partner HAWB' },
      { field: 'noOfPackageHawb', header: 'No of Package HAWB' },
      { field: 'consignmentCurrency', header: 'Consignment Currency' },
      { field: 'incoTerms', header: 'Inco Terms' },
      { field: 'countryOfOrigin', header: 'Country Of Origin' },
      { field: 'grossWeight', header: 'Gross Weight' },
      { field: 'paymentType', header: 'Payment Type' },
      { field: 'createdOn', header: 'Created On', format: 'date' },
      { field: 'originDetails.name', header: 'Origin Name', subChild: true },
      { field: 'originDetails.phone', header: 'Origin Phone No', subChild: true  },
      { field: 'originDetails.addressLine1', header: 'Origin Address Line 1', subChild: true  },
      { field: 'originDetails.addressLine2', header: 'Origin Address Line 2', subChild: true  },
      { field: 'originDetails.city', header: 'Origin City', subChild: true },
      { field: 'originDetails.country', header: 'Origin Country', subChild: true },
      { field: 'destinationDetails.name', header: 'Destination Name', subChild: true },
      { field: 'destinationDetails.phone', header: 'Destination Phone No', subChild: true },
      { field: 'destinationDetails.addressLine1', header: 'Destination Address Line 1', subChild: true  },
      { field: 'destinationDetails.addressLine2', header: 'Destination Address Line 2', subChild: true },
      { field: 'destinationDetails.city', header: 'Destination City', subChild: true },
      { field: 'destinationDetails.country', header: 'Destination Country', subChild: true },
      { field: 'pieceDetails[0].partnerHouseAirwayBill', header: 'Partner HAWB', subChild: true },
      { field: 'pieceDetails[0].description', header: 'Description', subChild: true },
      { field: 'pieceDetails[0].declaredValue', header: 'Declared Value', subChild: true },
      { field: 'pieceDetails[0].weight', header: 'Weight', subChild: true },
      { field: 'pieceDetails[0].hsCode', header: 'HS Code', subChild: true },
      { field: 'pieceDetails[0].consignmentId', header: 'Consignment ID', subChild: true },
    ];
  }   

  preAlertManifestIndicatorTable: any[] = [];
  selectedPreAlertManifestIndicator: any[] = [];

  indicator: any[] = [];
  reorderedIndicator: any[] = [];

  preAlertValidation() {
    let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
       obj.houseAirwayBill = [this.data.line.houseAirwayBill];

      this.consignmentService.findConsignmentPreAlertIndicator(obj).subscribe({
        next: (res: any) => { 
          this.preAlertManifestIndicatorTable = res;
         this.preAlertManifestIndicatorTable = res.map((item: any) => this.reorderFields(item));
          this.reorderedIndicator = this.indicator.map(item => this.reorderFields(item));
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
  }

  getNestedValue(obj: any, path: string): any {
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return value === null || value === undefined ? 'Null' : value;
  }

  reorderFields(obj: any): any {
    const reordered = {};
    const nullFields = [];
    const nonNullFields = [];

    for (const key in obj) {
      if (obj[key] === null || obj[key] === "") {
        nullFields.push({ [key]: obj[key] });
      } else {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          nonNullFields.push({ [key]: this.reorderFields(obj[key]) });
        } else if (Array.isArray(obj[key])) {
          nonNullFields.push({ [key]: obj[key].map((item: any) => this.reorderFields(item)) });
        } else {
          nonNullFields.push({ [key]: obj[key] });
        }
      }
    }

    nullFields.forEach(field => Object.assign(reordered, field));
    nonNullFields.forEach(field => Object.assign(reordered, field));

    return reordered;
  }

}
