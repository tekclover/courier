import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { StatusService } from '../status.service';
import { AuthService } from '../../../../core/Auth/auth.service';
import { NumberrangeService } from '../../../master/numberrange/numberrange.service';

@Component({
  selector: 'app-status-new',
  templateUrl: './status-new.component.html',
  styleUrl: './status-new.component.scss',
})
export class StatusNewComponent {
  active: number | undefined = 0;

  constructor(private cs: CommonServiceService, 
    private spin: NgxSpinnerService,
    private route: ActivatedRoute, 
    private router: Router, 
    private path: PathNameService, 
    private fb: FormBuilder,
    private service: StatusService,  
    private cas: CommonAPIService,  
    private numberRangeService: NumberrangeService,
    private auth: AuthService, 
    private messageService: MessageService,
  ) { }

  numCondition: any;
  pageToken: any;

  //form builder initialize
  form = this.fb.group({
    statusId: [],
    statusDescription: [,  Validators.required],
    createdOn: ['', ],
    createdBy: [],
    updatedBy: [],
    updatedOn: ['', ],
    languageId: [this.auth.languageId,  Validators.required],
    languageDescription: [],
    referenceField1: [], 
    referenceField2: [],
    referenceField3: [],
    referenceField4: [],
    referenceField5: [],
    referenceField6: [],
    referenceField7: [],
    referenceField8: [],
    referenceField9: [],
    referenceField10: [],
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

  nextNumber: any;
  ngOnInit() {
    let code = this.route.snapshot.params['code'];
    this.pageToken = this.cs.decrypt(code);

    const dataToSend = ['Setup', 'Status', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();
    
    this.form.controls.languageId.disable();

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
    else {
      this.spin.show();
      let obj: any = {};
      obj.numberRangeObject = ['STATUS'];
      this.numberRangeService.search(obj).subscribe({
        next: (res: any) => {
          if (res.length > 0) {
            this.nextNumber = Number(res[0].numberRangeCurrent) + 1;
            this.form.controls.statusId.patchValue(this.nextNumber);
            this.numCondition = 'true';
            this.form.controls.referenceField10.patchValue(this.numCondition);
            this.form.controls.statusId.disable();
          }
          this.spin.hide();
        },
        error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        },
      });
    }
  }

  languageIdList: any[] = [];
  dropdownlist(){
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
    ]).subscribe({next: (results: any) => {
      this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
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
      this.messageService.add({ severity: 'error', summary: 'Error', key: 'br', detail: 'Please fill required fields to continue' });
      return;
    }

    if (this.pageToken.pageflow != 'New') {
      this.spin.show()
      this.service.Update(this.form.getRawValue()).subscribe({
        next: (res:any) => {
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res.statusId + ' has been updated successfully' });
          this.router.navigate(['/main/idMaster/status']);
          this.spin.hide();
        }, error: (err:any) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    } else {
      this.spin.show()
      this.service.Create(this.form.getRawValue()).subscribe({
        next: (res:any) => {
        if(res){
          this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: res.statusId + ' has been created successfully' });
          this.router.navigate(['/main/idMaster/status']);
          this.spin.hide();
        }
        }, error: (err:any) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }
      })
    }
  }
}