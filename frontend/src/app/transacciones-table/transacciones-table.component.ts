import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TransaccionesTableDataSource, TransaccionesTableItem } from './transacciones-table-datasource';


@Component({
  selector: 'app-transacciones-table',
  templateUrl: './transacciones-table.component.html',
  styleUrls: ['./transacciones-table.component.css']
})
export class TransaccionesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TransaccionesTableItem>;
  dataSource: TransaccionesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Receptor', 'Monto','Fecha','Estado'];

  constructor() {
    this.dataSource = new TransaccionesTableDataSource();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
