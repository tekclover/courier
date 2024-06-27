import { Component } from '@angular/core';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { CurrencyService } from '../currency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/Auth/auth.service';
import { CommonAPIService } from '../../../../common-service/common-api.service';

@Component({
  selector: 'app-currency-new',
  templateUrl: './currency-new.component.html',
  styleUrl: './currency-new.component.scss'
})
export class CurrencyNewComponent {

  active: number | undefined = 0;
  status:any[] = []
  constructor(private cs: CommonServiceService, private spin: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router, private path: PathNameService, private fb: FormBuilder,
    private service: CurrencyService, private messageService: MessageService,private cas: CommonAPIService,
    private auth: AuthService) { 
      this.status = [
        { value: '2', label: 'Inactive' },
        { value: '1', label: 'Active' }
        ];
    }

  pageToken: any;

  //form builder initialize
  form = this.fb.group({
    currencyId: [, Validators.required],
    currencyDescription: [,  Validators.required],
    createdOn: ['', ],
    createdBy: [],
    updatedBy: [],
    updatedOn: ['', ],
    statusDescription: [],
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
    statusId:["1",],
   
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

    const dataToSend = ['Setup', 'Currency', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line)
    }
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
        next: (res) => {
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: res.currencyId + ' has been updated successfully' });
          this.router.navigate(['/main/idMaster/currency']);
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
          this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: res.currencyId + ' has been created successfully' });
          this.router.navigate(['/main/idMaster/currency']);
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

