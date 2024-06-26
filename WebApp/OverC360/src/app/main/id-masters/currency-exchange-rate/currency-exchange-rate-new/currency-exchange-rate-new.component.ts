import { Component } from '@angular/core';
import { CurrencyExchangeRateService } from '../currency-exchange-rate.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';

@Component({
  selector: 'app-currency-exchange-rate-new',
  templateUrl: './currency-exchange-rate-new.component.html',
  styleUrl: './currency-exchange-rate-new.component.scss'
})
export class CurrencyExchangeRateNewComponent {

  
  
  active: number | undefined = 0;
  status:any[] = []
  constructor(private cs: CommonServiceService, private spin: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router, private path: PathNameService, private fb: FormBuilder,
    private service: CurrencyExchangeRateService, private messageService: MessageService,private cas: CommonAPIService,
    private auth: AuthService) { 
      this.status = [
        { value: '2', label: 'Inactive' },
        { value: '1', label: 'Active' }
        ];
    }

  pageToken: any;

  //form builder initialize
  form = this.fb.group({
    fromCurrencyId:[],
    fromCurrencyDescription:[, Validators.required],
    fromCurrencyValue:[, Validators.required],
    toCurrencyId:[, Validators.required],
    toCurrencyDescription:[, Validators.required],
    toCurrencyValue:[, Validators.required],
    languageId: [this.auth.languageId, Validators.required],
    languageDescription:[],
    companyId:[this.auth.companyId, Validators.required],
    companyName:[],
    statusDescription:[],
    createdOn: [],
    createdBy: [],
    updatedBy: [],
    updatedOn: [],
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
    remark:[],
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

    const dataToSend = ['Master', 'Currency Exchange Rate', this.pageToken.pageflow];
    this.path.setData(dataToSend);

    this.dropdownlist();
    
    this.form.controls.languageId.disable();
    this.form.controls.companyId.disable();



    if (this.pageToken.pageflow != 'New') {
      this.fill(this.pageToken.line);
      this.form.controls.languageId.disable();
      this.form.controls.companyId.disable();
      this.form.controls.fromCurrencyId.disable();
      this.form.controls.toCurrencyId.disable();
      this.form.controls.updatedBy.disable();
      this.form.controls.createdBy.disable();
      this.form.controls.updatedOn.disable();
      this.form.controls.createdOn.disable();
    }
  }

  languageIdList: any[] = [];
  companyIdList: any[] = [];

  dropdownlist(){
    this.spin.show();
    this.cas.getalldropdownlist([
      this.cas.dropdownlist.setup.language.url,
      this.cas.dropdownlist.setup.company.url,

    ]).subscribe({next: (results: any) => {
      this.languageIdList = this.cas.foreachlist(results[0], this.cas.dropdownlist.setup.language.key);
      this.companyIdList = this.cas.foreachlist(results[1], this.cas.dropdownlist.setup.company.key);
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
        next: (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Updated', key: 'br', detail: 'CurrencyExchangeRate has been updated successfully' });
          this.router.navigate(['/main/idMaster/currencyExchangeRate']);
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
          this.messageService.add({ severity: 'success', summary: 'Created', key: 'br', detail: ' CurrencyExchangeRate has been created successfully' });
          this.router.navigate(['/main/idMaster/currencyExchangeRate']);
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

