import { Component, inject, Input } from '@angular/core';
import { DopeStatsComponent } from "../dopestats/dopestats.component";
import { DopestocksComponent } from "../dopestocks/dopestocks.component";

import { DopetrenchcoatComponent } from "../dopetrenchcoat/dopetrenchcoat.component";
import { TradingService } from '../../services/trading.service';
import { StockingService } from '../../services/stocking.service';
import { itemTransactedEvent } from '../../models/itemTransactedEvent';
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-dopeplay',
  standalone: true,
  imports: [DopeStatsComponent, DopestocksComponent, DopetrenchcoatComponent, MapComponent],
  templateUrl: './dopeplay.component.html',
  styleUrl: './dopeplay.component.css'
})
export class DopeplayComponent
{
  moveDisabled = false;
  tradingService = inject(TradingService)
  stockingService = inject(StockingService);
  errorMessage = this.tradingService.errorMessage();

  processPurchase($event: itemTransactedEvent)
  {
    this.tradingService.placeBuyOrder($event);
  }

  processSale($event: itemTransactedEvent)
  {
    console.log(this.tradingService.getStockPrice($event.name));
    console.log('quantity to sell ', $event.quantity);
    console.log('item to sell ', $event.name);
    this.tradingService.placeSellOrder($event);
  }



  move()
  {
    this.tradingService.advanceClock();
    this.tradingService.availableStock.set(this.stockingService.getMarket())
  }

}
