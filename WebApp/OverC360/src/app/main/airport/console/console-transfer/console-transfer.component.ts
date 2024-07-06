import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../common-service/common-service.service';
import { PathNameService } from '../../../../common-service/path-name.service';
import { AuthService } from '../../../../core/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-console-transfer',
  templateUrl: './console-transfer.component.html',
  styleUrl: './console-transfer.component.scss'
})
export class ConsoleTransferComponent {

  status: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ConsoleTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private path: PathNameService,
    private fb: FormBuilder,
    private service: ConsoleService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
  ) { 
    
  }

  form = this.fb.group({
    fromConsoleId: [],
  houseAirwayBill: [],
  toConsoleId: [],
  });


  ngOnInit(): void {
this.getConsoleDropdown();
    console.log(this.data)
    this.form.controls.fromConsoleId.patchValue(this.data[0].consoleId);
    this.form.controls.houseAirwayBill.patchValue(this.data[0].houseAirwayBill)

    if(this.data.pageflow == "Edit"){
      this.form.patchValue(this.data.code)
    }

  }
  consoleList:any[] = [];
getConsoleDropdown(){
    let obj: any = {};
    obj.companyId = [this.auth.companyId];
    obj.languageId = [this.auth.languageId];
    this.spin.show();
    this.service.search(obj).subscribe({next: (result) => {
      this.consoleList = this.cas.foreachlist(result, {key: 'consoleId', value: 'consoleId'});
      this.spin.hide();
    }, error: (err) =>{
      this.spin.hide();
      this.cs.commonerrorNew(err);
    }})
  
}
selecetedTrasnfer:any[]=[];

  save() {
    this.spin.show();
    this.selecetedTrasnfer.push(this.form.getRawValue());
    this.service.Transfer(this.selecetedTrasnfer).subscribe({
      next: (res) => {
        this.messageService.add({
         severity: 'success',
          summary: 'Updated',
          key: 'br',
          detail: res[0].consoleId + ' has been Transfered successfully',
     });
        //this.router.navigate(['/main/airport/console']);
       this.dialogRef.close();
        this.spin.hide();
      },
      error: (err) => {
        this.spin.hide();
       this.cs.commonerrorNew(err);
      },
    });
 } 
  



}

