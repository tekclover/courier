import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonAPIService } from '../../../../../common-service/common-api.service';
import { CommonServiceService } from '../../../../../common-service/common-service.service';
import { AuthService } from '../../../../../core/core';
import { ConsignmentService } from '../../consignment.service';

@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrl: './piece-details.component.scss'
})
export class PieceDetailsComponent {


  pieceForm = this.fb.group({
    items: this.fb.array([]) 
  });

  constructor(
    private cs: CommonServiceService,
    private spin: NgxSpinnerService,
    private router: Router,
    private fb: FormBuilder,
    private service: ConsignmentService,
    private messageService: MessageService,
    private cas: CommonAPIService,
    private auth: AuthService,
    public dialogRef: MatDialogRef<PieceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
 
  }

}
