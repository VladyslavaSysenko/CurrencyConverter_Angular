import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from './services/currencyapidata.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private currencyapi: CurrencyapidataService){}

  rates: Record<string, Record<string, number>> = {};
  currencies: string[] = ["UAH","USD", "EUR"];
  count:number = 0;

  ngOnInit(): void {
    // get api rates for needed currencies. Start page after all (count is 3)
    for (let currency of this.currencies) {
      this.currencyapi.getRates(currency).subscribe(data => {
        this.rates[currency] = JSON.parse(JSON.stringify(data));
        this.count++;
      });
    }
  }
}