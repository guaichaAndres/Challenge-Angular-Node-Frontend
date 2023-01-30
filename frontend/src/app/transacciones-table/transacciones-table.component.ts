import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApiService, transacciones } from '../api-services/api.service';


@Component({
  selector: 'app-transacciones-table',
  templateUrl: './transacciones-table.component.html',
  styleUrls: ['./transacciones-table.component.css']
})
export class TransaccionesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 data: [];
 

  displayedColumns = ['receptor','monto','fecha','estado'];

  constructor(private transData: ApiService) {

      }
  ngOnInit(){
    this.transData.getTransacciones().
    subscribe((response : any) => {
for(let responses of response.docs){
this.data= response.docs;
}
console.log(this.data);
    }), (error : any) => {
      console.log(error)
    }
  }
  ngAfterViewInit(): void {
  }
}
