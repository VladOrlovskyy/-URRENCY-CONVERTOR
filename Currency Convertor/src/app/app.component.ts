import { Component, OnInit } from '@angular/core';
import { RatesService } from './rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RatesService],
})
export class AppComponent implements OnInit {
  constructor(private RatesService: RatesService) {}

  public USDUAH: number = 0;
  public EURUAH: number = 0;

  setRates() {
    this.RatesService.getExchangeRates().subscribe((currencies) => {
      currencies.forEach((currency) => {
        if (currency.cc === 'USD' && currency.r030 === 840) {
          this.USDUAH = Math.round(currency.rate * 100) / 100;
        }
        if (currency.cc === 'EUR' && currency.r030 === 978) {
          this.EURUAH = Math.round(currency.rate * 100) / 100;
        }
      });
    });
  }

  ngOnInit() {
    this.setRates();
  }
}
