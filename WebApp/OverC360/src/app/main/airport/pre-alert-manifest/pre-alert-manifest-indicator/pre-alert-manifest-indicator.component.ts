import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { PathNameService } from '../../../../common-service/path-name.service';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { AuthService } from '../../../../core/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { ConsignmentService } from '../../../operation/consignment/consignment.service';


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
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {

    this.preAlertValidation();

  }

  indicator: any[] = [];
  reorderedIndicator: any[] = [];

  preAlertValidation() {
    let obj: any = {};
      obj.languageId = [this.auth.languageId];
      obj.companyId = [this.auth.companyId];
      obj.houseAirwayBill = [this.data.line.houseAirwayBill];

      this.consignmentService.findConsignmentPreAlertIndicator(obj).subscribe({
        next: (res: any) => { 
          this.indicator = res;
          this.reorderedIndicator = this.indicator.map(item => this.reorderFields(item));
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
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

  save() {
    this.dialogRef.close();
  }

}
