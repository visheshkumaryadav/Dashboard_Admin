import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public dialog: MatDialog) { }

  openChildClientForm() {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '400px', // Set the width as per your requirement
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
