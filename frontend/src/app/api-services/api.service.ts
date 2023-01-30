import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface transacciones {
  receptor:string,
  monto:number,
  fecha:string,
  estado:boolean,
  emisor: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl='http://localhost:3000/getTrans';
apiUrl2='http://localhost:3000/getCards';

  constructor(private http: HttpClient) { }
  getTransacciones() {
    return this.http.get(this.apiUrl);

  }

  getTarjetas() {
    return this.http.get(this.apiUrl2);

  }
}
