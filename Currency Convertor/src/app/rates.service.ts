import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from 'src/assets/types';

@Injectable()
export class RatesService {
  constructor(private http: HttpClient) {}

  getExchangeRates() {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    return this.http.get<Array<ICurrency>>(url);
  }
}
