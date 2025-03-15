import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../models/person.model';
import {MatTableModule} from '@angular/material/table';
import Papa from 'papaparse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  parsedData: any[] = [];
  tableHeaders: string[] = [];

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }
  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result as string;
      this.processCsvData(csvData);
    };
    reader.readAsText(file);
  }



  processCsvData(csvData: string): void {
    Papa.parse(csvData, {
      header: true,
      complete: (result) => {
        console.log(result.data);
        this.parsedData = result.data;
        this.tableHeaders = result.meta.fields || [];      }
    });
  }
}
