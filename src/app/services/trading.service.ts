import { inject, Injectable, signal } from '@angular/core';
import { dopeStock } from '../models/dopeStock.model';
import { dopeStat } from '../models/dopeStat.model';
import { dopeTrenchStockItem } from '../models/dopeTrenchStockItem.model';
import { StockingService } from './stocking.service';
import { itemTransactedEvent } from '../models/itemTransactedEvent';

@Injectable({
  providedIn: 'root'
})
export class TradingService
{
  stockingService = inject(StockingService);

  constructor() { }
  availableStock = signal<dopeStock[]>(this.stockingService.getMarket());
  clock = signal(1);
  tradingSheet = signal<dopeStat>({ cash: 1200, day: this.clock(), debt: -1200, stokvel: 0 });
  trenchCoatStock = signal<dopeTrenchStockItem[]>([]);

  errorMessage = signal<string>('');

  advanceClock()
  {
    this.clock.update(x => x + 1);
    //charge interest on the debt
    let t = this.tradingSheet();
    t.debt *= 1.20;
    t.debt = t.debt | 0;
    this.tradingSheet.set(t);
  }

  getStockPrice(name: string)
  {
    return this.availableStock().find(x => x.name === name)?.price;
  }

  placeSellOrder(event: itemTransactedEvent)
  {
    console.log('tradingService placed sale!');
    if (event.quantity > 0)
    {
      console.log('processing the selling part! ', event)
      const moneyEarned = event.price || 0 * event.quantity;
      //decrease the suitcase stock
      //increase the balance

      let p = this.tradingSheet();
      p!.cash += moneyEarned;
      this.tradingSheet.update(x => p);
      //update player stock
      let st: dopeTrenchStockItem[] = [];
      st = this.trenchCoatStock();
      let f = st.find(x => x.name == event.name);
      if (f)
      {
        f.quantity -= event.quantity;
      }
      else
      {
        st.push({ name: event.name, quantity: event.quantity });
      }
      this.trenchCoatStock.set(st);
    }
    else
    {
      console.log('0 items cannot be sold.');
    }
  }


  placeBuyOrder(event: itemTransactedEvent)
  {
    console.log(event);
    let moneyRequiredForPurchase = (event.price ?? Infinity) * event.quantity;
    if (moneyRequiredForPurchase <= this.tradingSheet()!.cash)
    {
      //update player balance
      let p = this.tradingSheet();
      p!.cash -= moneyRequiredForPurchase;
      console.log(p);
      this.tradingSheet.update(x => p);
      //update player stock
      let st: dopeTrenchStockItem[] = [];
      st = this.trenchCoatStock();
      let f = st.find(x => x.name == event.name);

      if (f)
      {
        f.quantity += event.quantity;
      }
      else
      {
        st.push({ name: event.name, quantity: event.quantity });
      }
      this.trenchCoatStock.set(st);
      //update stock for this city
      let sg: dopeStock[] = [];
      sg = this.availableStock();
      let r = sg.find(x => x.name == event.name);

      if (r)
      {
        r.count -= event.quantity;
      }
      this.availableStock.set(sg);
    }
    else
    {
      this.errorMessage.set('Could not place order!');
    }
  }
}
