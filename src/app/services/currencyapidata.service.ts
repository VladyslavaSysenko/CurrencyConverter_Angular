import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  constructor(private http: HttpClient) { }
  
  // get rates for currency
  getRates(currency: string): Observable<object>{
    let url = "https://api.exchangerate.host/latest?base=" + currency;
    return this.http.get(url).pipe(
      map(data => Object(data).rates)
    )
  }
}