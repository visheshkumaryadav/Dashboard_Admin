import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  childClient: any = {}; // Object to store form data

  constructor(public dialogRef: MatDialogRef<AddClientComponent>) { }

  ngOnInit(): void {
  }

  saveChildClient() {
    // Implement the logic to save the child client data
    console.log('Saving child client:', this.childClient);

    // Reset form fields after saving
    this.childClient = {};

    // Close the dialog
    this.dialogRef.close();
  }
}
