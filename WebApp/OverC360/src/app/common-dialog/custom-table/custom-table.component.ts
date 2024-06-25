import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {

  sourceProducts!: any[];

  targetProducts!: any[];

  constructor(private cdr: ChangeDetectorRef, public dialogRef: MatDialogRef<CustomTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit() {    
    console.log(this.data)
    this.sourceProducts = this.data.source;
    console.log(this.sourceProducts)
    this.targetProducts = this.data.target;
}
}
