import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { NumberrangeService } from '../../numberrange/numberrange.service';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-app-user-new',
  templateUrl: './app-user-new.component.html',
  styleUrl: './app-user-new.component.scss'
})
export class AppUserNewComponent {

  active: number | undefined = 0;
  status: any[] = []

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: AppUserService,
    private numberRangeService: NumberrangeService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService
  ) {
    this.status = [
      { value: '17', label: 'Inactive' },
      { value: '16', label: 'Active' }
    ];
   }

  pageToken: any;
  numCondition: any;

  // form builder initialize
  form = this.fb.group({
    languageId: [this.auth.languageId],
    languageDescription: [],
    companyId: [this.auth.companyId],
    companyName: [],
    appUserId: [, Validators.required],
    appUserName: [, Validators.required],
    appUserType: [],
    vehicleRegNumber: [],
    password: [, Validators.required],
    routeId: [],
    assignedHubCode: [],
    statusId: ["16",],
    statusDescription: [],
    remark: [],
    mobileNumber: [],
    referenceField1: [],
    referenceField10: [],
    referenceField2: [],
    referenceField3: [],
    referenceField4: [],
    referenceField5: [],
    referenceField6: [],
    referenceField7: [],
    referenceField8: [],
    referenceField9: [],
    createdOn: ['',],
    createdBy: [],
    updatedOn: ['',],
    updatedBy: [],
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

  nextNumber: any;
  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Master', 'App User', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.appUserId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
    // else {
    //   this.spin.show();
    //   let obj: any = {};
    //   obj.numberRangeObject = ['APPUSER'];
    //   this.numberRangeService.search(obj).subscribe({
    //     next: (res: any) => {
    //       if (res.length > 0) {
    //         this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
    //         this.form.controls.appUserId.patchValue(this.nextNumber);
    //         this.numCondition = 'true';
    //         this.form.controls.referenceField10.patchValue(this.numCondition);
    //         this.form.controls.appUserId.disable();
    //       }
    //       this.spin.hide();
    //     },
    //     error: (err) => {
    //       this.spin.hide();
    //       this.cs.commonerrorNew(err);
    //     },
    //   });
    // }
  }

  languageIdList: any[] = [];
  companyIdList: any[] = [];
  routeIdList: any[] = [];
  hubCodeList: any[] = [];
  vehcileRegNoList: any[] = [];

  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.route.url,
      this.cas.dropdownlist.setup.hub.url,
      this.cas.dropdownlist.setup.vehicle.url,

    ]).subscribe({
      next: (results: any) => {
        this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
        this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
        this.routeIdList = this.cas.forLanguageFilter(results[2], this.cas.dropdownlist.setup.route.key);
        this.hubCodeList = this.cas.forLanguageFilter(results[3], this.cas.dropdownlist.setup.hub.key);
        this.vehcileRegNoList = this.cas.forLanguageFilter(results[4], this.cas.dropdownlist.setup.vehicle.key);

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
            detail: res.appUserId + ' has been updated successfully',
          });
          this.router.navigate(['/main/master/appUser']);
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
              detail: res.appUserId + ' has been created successfully',
            });
            this.router.navigate(['/main/master/appUser']);
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



}
