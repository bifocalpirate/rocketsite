import { inject, Injectable } from '@angular/core';
import { dopeStock } from '../models/dopeStock.model';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class StockingService
{

  initialStockConfiguration = [
    {
      name: 'Weed',
      initialPrice: 100,
      initialStock: 200,
      stockVolatility: 0.3,
      priceVolatility: 0.09,
      appearance: 0.9
    },
    {
      name: 'Hashish',
      initialPrice: 450,
      initialStock: 100,
      stockVolatility: 0.3,
      priceVolatility: 0.12,
      appearance: 0.9
    },
    {
      name: 'Kool Aid',
      initialPrice: 750,
      initialStock: 100,
      stockVolatility: 0.3,
      priceVolatility: 0.05,
      appearance: 0.8
    },
    {
      name: 'Special K',
      initialPrice: 50,
      priceVolatility: 0.12,
      appearance: 0.7,
      initialStock: 200,
      stockVolatility: 0.3,
    },
    {
      name: 'Heroin',
      initialPrice: 2000,
      priceVolatility: 0.12,
      appearance: 0.7,
      initialStock: 200,
      stockVolatility: 0.3,
    },
    {
      name: 'Shrooms',
      initialPrice: 50,
      priceVolatility: 0.3,
      appearance: 0.7,
      initialStock: 500,
      stockVolatility: 0.7,
    },
    {
      name: 'Tracers',
      initialPrice: 600,
      priceVolatility: 0.6,
      appearance: 0.6,
      initialStock: 300,
      stockVolatility: 0.3,
    }
  ]

  utilityService = inject(UtilityService);

  getMarket()
  {
    let t: dopeStock[] = [];
    this.initialStockConfiguration.forEach(x =>
    {
      if (this.utilityService.rollDice(x.appearance))
      {
        t.push({
          name: x.name,
          price: this.utilityService.getSwingNumber(x.initialPrice, x.priceVolatility) | 0,
          count: this.utilityService.getSwingNumber(x.initialStock, x.stockVolatility) | 0
        }
        );
      }
    });
    return t;
  }


  constructor() { }
}
