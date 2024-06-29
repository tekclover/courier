import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { IataService } from '../iata.service';   
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { AuthService } from '../../../../core/core';


@Component({
  selector: 'app-iata-new',
  templateUrl: './iata-new.component.html',
  styleUrl: './iata-new.component.scss'
})
export class IataNewComponent {

  active: number | undefined = 0;
  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: IataService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService
  ) { }

  pageToken: any;
  // Form builder Initialize
  form = this.fb.group({
    languageId: [this.auth.languageId, Validators.required],
    languageDescription: [],
    companyId: [this.auth.companyId, Validators.required],
    companyName: [],
    origin: [, Validators.required],
    originCode: [, Validators.required],
    iataKd: [, Validators.required],
    iataCharge: [],
    currencyId: [, Validators.required],
    currencyDescription: [],
    remark: [],
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
    createdOn: [],
    createdBy: [],
    updatedBy: [],
    updatedOn: [],
  });

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

    const dataToSend = ['Master', 'IATA', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();

    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line)
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.originCode.disable();
      this.form.controls.origin.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }

  languageIdList: any[] = [];
  companyIdList: any[] = [];
  currencyIdList: any[] = [];
  
  dropdownlist() {
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,
      this.cas.dropdownlist.setup.currency.url,

    ]).subscribe({next: (results: any) => {
      this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
      this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
      this.currencyIdList = this.cas.foreachlist(results[2], this.cas.dropdownlist.setup.currency.key);
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
  }

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', key: 'br', detail: 'Please fill required fields to continue' });
      return;
    }

    if (this.pageToken.pageflow != 'New') {
      this.spin.show()
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res.originCode +' has been updated successfully' });
          this.router.navigate(['/main/idMaster/iata']);
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } else {
      this.spin.show()
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res) => {
        if(res){
          this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail:  res.originCode+ ' has been created successfully' });
          this.router.navigate(['/main/idMaster/iata']);
          this.spin.hide();
        }
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } 
  }
}
