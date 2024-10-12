import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService
{
  
  constructor() { }

  getNewPrice(existingPrice: number, volatility: number)
  {
    return (1.0 + volatility) * existingPrice;
  }

  getSwingNumber(central: number, deviation: number)
  {
    return central + central * (this.rollDice(0.5) ? 1 : -1) * (1 + Math.random()) * deviation;
  }

  clamp(num: number, lower: number, upper: number)
  {
    return Math.min(Math.max(num, lower), upper);
  }

  rollDice(probability: number)
  {
    return Math.random() <= probability;
  }

}
