import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './dialog-modify.component.html',
  styles: [
  ]
})
export class DialogModifyComponent implements OnInit {

  constructor( public dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: Persona,
               public dialogRef: MatDialogRef<DialogModifyComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
