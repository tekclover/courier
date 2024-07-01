import { Component, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { ConsignmentService } from '../../../operation/consignment/consignment.service';

@Component({
  selector: 'app-pre-alert-new',
  templateUrl: './pre-alert-new.component.html',
  styleUrl: './pre-alert-new.component.scss'
})
export class PreAlertNewComponent {

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
  ) {}
  
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

  form = this.fb.group({
    partnerHouseAirwayBill: [],
    originDetails: this.OriginDetails,
    destinationDetails: this.DestinationDetails,
    goodsDescription: [],
    weight: [],
    consignmentValue: [],
    consignmentCurrency: [],
    hsCode: [],
    countryOfOrigin: [],
    countryOfDestination: [],
    flightArrivalTime: [],
    estimatedDepartureTime: [],
    totalShipment: [],
    noOfCRT: [],
    totalShipmentWeight: [],
    totalValue: [],
  })

}
