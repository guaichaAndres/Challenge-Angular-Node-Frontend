import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-services/api.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  data: [];
  numero: number;
  saldo: number;

  constructor(private cardData: ApiService) { }

  ngOnInit(){
    this.cardData.getTarjetas().
    subscribe((response : any) => {
for(let responses of response.docs){
this.data= response.docs;
this.numero = response.docs[0].numero;
this.saldo = response.docs[0].saldo;

}


console.log(this.data);
console.log(this.numero);
    }), (error : any) => {
      console.log(error)
    }
  }

}
