import { Component, OnInit} from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{
  constructor(private currencyapi: CurrencyapidataService){}
  
  currencies = ["UAH","USD", "EUR"]
  currency:{[key: string]: string} = {
    currency_from: "UAH",
    currency_to: "UAH"
  }
  value:{[key: string]: number} = {
    value_from: 0,
    value_to: 0
  }
  rates: any = [];
  multiplyer: number = 1;

  // get data for UAH/UAH
  async ngOnInit() {
    this.rates = await this.currencyapi.getcurrencydata(this.currency.currency_from);
  }

  // change currency from select
  async changecurrency(currency:string, code:string) {
    this.currency[`currency_${code}`] = currency;
    this.rates = await this.currencyapi.getcurrencydata(this.currency.currency_from);
    this.convert(`${code}`);
  }

  // change amount from input
  amount(value:string, code:string) {
    this.value[`value_${code}`] = Number(value);
    this.convert(`${code}`);
  }

  // recalculate another input
  convert(code:string){
    this.multiplyer = this.rates[`${this.currency.currency_to}`];
    if (code == "from"){
      this.value.value_to = this.value.value_from * this.multiplyer;
      (<HTMLInputElement>document.getElementById(`currencytoinput`)).value = this.value.value_to.toFixed(2);
    }
    if (code == "to"){
      this.value.value_from = this.value.value_to / this.multiplyer;
      (<HTMLInputElement>document.getElementById("currencyfrominput")).value = this.value.value_from.toFixed(2);
    } 
  }
}
