import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http: HttpClient) { }
  data: any = null;
  result: number = 1;
  multiplyer: number = 1;
  url:string = "";



  async getcurrencydata(currency: string) {
    this.url = "https://api.exchangerate.host/latest?base=" + currency;
    await this.getapidata();
    return this.data
  }

  async getapidata() {
      return new Promise<void> ((resolve) => this.http.get(this.url).subscribe(data => {
      this.data = JSON.stringify(Object(data).rates);
      this.data = JSON.parse(this.data);
      resolve();
    }))
  }
}