import { CurrencyapidataService } from '../currencyapidata.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private currency: CurrencyapidataService){}

  rates: any = [];
  usd_uah: number = 0;
  eur_uah: number = 0;

  // get exchange rates
  async ngOnInit() {
    this.rates = await this.currency.getcurrencydata('UAH');
    this.usd_uah = 1/this.rates['USD'];
    this.eur_uah = 1/this.rates['EUR'];
  }
}


